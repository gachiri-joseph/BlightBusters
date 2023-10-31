import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useRef, useState} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormButton from '../../components/FormButton';
import {ScrollView} from 'react-native-gesture-handler';
import FormInput from '../../components/FormInput';

export default function EditProfileScreen() {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const {width} = useWindowDimensions();
  const [theme, setTheme] = useState('dim');
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  //   const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
        //   bs.current.snapTo(1);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
        //   bs.current.snapTo(1);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
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
    <BottomSheetModalProvider >
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: isOpen ? COLORS.gray2 : COLORS.white,
          paddingHorizontal: 20,
          height:SIZES.height

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
              {image ? (
                <Avatar.Image source={{uri: image}} size={140} />
              ) : (
                <Avatar.Image
                  source={require('../../assets/images/135.png')}
                  size={140}
                />
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

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Change your email"
          iconType="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />

        <FormInput
          labelValue={fullName}
          onChangeText={userName => setFullName(userName)}
          placeholderText="change your username"
          iconType="person"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />
        <FormInput
          labelValue={number}
          onChangeText={userNumber => setNumber(userNumber)}
          placeholderText="change your number"
          iconType="phone"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />
        <FormInput
          labelValue={location}
          onChangeText={userLocation => setLocation(userLocation)}
          placeholderText="change your location"
          iconType="location-on"
          autoCapitalize='words'
          autoCorrect={false}
          secureTextEntry={false}
        />

        <FormButton title="Save" onPress={() => {}} />

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
            <FormButton title="Cancel" onPress={handleDismissModal} />
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
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
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    color: 'black',
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  contentContainer: {
    backgroundColor: COLORS.gray2,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontWeight: '900',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: '#101318',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#56636F',
    fontSize: 13,
    fontWeight: 'normal',
    width: '100%',
  },
});
