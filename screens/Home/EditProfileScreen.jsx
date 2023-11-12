import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Platform,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import * as ImagePicker from 'react-native-image-picker';
import React, {useRef, useState, useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormButton from '../../components/FormButton';
import {ScrollView} from 'react-native-gesture-handler';
import FormInput from '../../components/FormInput';
import {showMessage} from 'react-native-flash-message';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/userSlice';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function EditProfileScreen() {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const {width} = useWindowDimensions();
  const [theme, setTheme] = useState('dim');
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);
  const [updated, setUpdated] = useState(false);
  //   const {colors} = useTheme();
  const user = useSelector(selectUser);
  // console.log('user11',user)

  ///firebase///
  const getUser = async () => {
    const currentUser = await firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
        setUpdated(false);
      })
      .catch(error => console.error(error));
  };
  //
  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl == null && userData.userImg) {
      imgUrl = userData.userImg;
    }

    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        username: userData.username,
        phone: userData.phone,
        location: userData.location,
        userImg: imgUrl,
      })
      .then(() => {
        console.log('User Updated!');
        setUpdated(true);
        // Alert.alert(
        //   'Profile Updated!',
        //   'Your profile has been updated successfully.',
        // );
        showMessage({
          message: 'Your profile has been updated successfully!',
          type: 'success',
          icon: 'success',
        });
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  //
  useEffect(() => {
    getUser();
  }, [updated]);
  //
  //////
  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //     cropperActiveWidgetColor:COLORS.primary,
  //     // showCropFrame:false,
  //     // hideBottomControls:true,
  //     // enableRotationGesture:true,
  //     // cropperToolbarColor:'pink',//not working
  //     cropperStatusBarColor:'white',
  //     // freeStyleCropEnabled:true
  //   })
  //     .then(image => {
  //       console.log(image);
  //       setImage(image.path);
  //       bottomSheetModalRef.current?.dismiss();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return err;
  //     });
  // };

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   })
  //     .then(image => {
  //       console.log(image);
  //       setImage(image.path);
  //       bottomSheetModalRef.current?.dismiss();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return err;
  //     });
  // };

  //////image picker

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const takePhotoFromCamera = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted) {
      try {
        await ImagePicker.launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            // let imageUri = response.uri || response.assets?.[0]?.uri;
            setImage(response.assets[0].uri);
          }
          bottomSheetModalRef.current?.dismiss();
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const choosePhotoFromLibrary = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    try {
      await ImagePicker.launchImageLibrary(options, result => {
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        bottomSheetModalRef.current?.dismiss();
      });
    } catch (err) {
      console.log(err);
    }
  };
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ['65%'];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  function handleDismissModal() {
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }
  return (
    <BottomSheetModalProvider>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: isOpen ? COLORS.gray2 : COLORS.white,
          paddingHorizontal: 20,
          height: SIZES.height,
        }}>
        <View style={{alignItems: 'center', marginVertical: 28}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 999,
              }}>
              {/* {image && <Avatar.Image source={{uri:image }} size={140} />} */}
              {userData?.userImg || image ? (
                <Avatar.Image
                  source={{
                    uri: image ? image : userData.userImg,
                  }}
                  size={140}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    width: 140,
                    height: 140,
                    borderRadius: 999,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome6 name={'user'} color={'black'} size={50} />
                </View>
              )}
            </View>
            <TouchableOpacity onPress={handlePresentModal}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isOpen ? COLORS.white : COLORS.gray2,
                  marginHorizontal: -30,
                  marginBottom: 10,
                }}>
                <MaterialCommunityIcons name="camera" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>   {userData ? userData.username : ''}</Title>
        
          </View> */}

        {/* <FormInput
          
          // labelValue={email}
          // onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Change your email"
          iconType="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        /> */}

        <FormInput
          labelValue={userData ? userData.username : ''}
          onChangeText={txt => setUserData({...userData, username: txt})}
          placeholderText="user"
          iconType="person"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />
        <FormInput
          labelValue={userData ? userData.phone : ''}
          onChangeText={txt => setUserData({...userData, phone: txt})}
          placeholderText="0712345678"
          iconType="phone"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />
        <FormInput
          value={userData ? userData.location : ''}
          onChangeText={txt => setUserData({...userData, location: txt})}
          placeholderText="user location"
          iconType="location-on"
          autoCapitalize="words"
          autoCorrect={false}
          secureTextEntry={false}
        />

        <FormButton title="Save" onPress={handleUpdate} />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{borderRadius: 30, backgroundColor: COLORS.white}}
          onDismiss={() => setIsOpen(false)}>
          <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Upload Photo</Text>
              <Text style={styles.panelSubtitle}>
                Choose Your Profile Picture
              </Text>
            </View>
            <FormButton title="Take Photo" onPress={takePhotoFromCamera} />
            <FormButton
              title="Choose From Library"
              onPress={choosePhotoFromLibrary}
            />
            <FormButton title="Close" onPress={handleDismissModal} />
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
 
  panel: {
    padding: 20,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
 
  panelTitle: {
    fontSize: SIZES.h1,
    color: 'black',
    height: 35,
    fontFamily:'OpenSans-SemiBold'
  },
  panelSubtitle: {
    fontSize: SIZES.h4,
    color: 'gray',
    height: 30,
    fontFamily:'OpenSans-Medium',
    marginBottom: 10,
  },

 
});
