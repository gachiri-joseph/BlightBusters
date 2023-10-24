// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/
// https://www.androidcentral.com/what-scoped-storage
// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import FormButton from '../../components/FormButton';
const ModalScreen = ({navigation}) => {
  // const [filePath, setFilePath] = useState({});
  const [image, setImage] = useState("");
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

  // const requestExternalWritePermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'External Storage Write Permission',
  //           message: 'App needs write permission',
  //         },
  //       );
  //       // If WRITE_EXTERNAL_STORAGE Permission is granted
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       alert('Write permission err', err);
  //     }
  //     return false;
  //   } else return true;
  // };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted) {
      const result=await ImagePicker.launchCamera(options);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
      navigation.navigate('CameraScreen')
    }
        // if (response.didCancel) {
        //   alert('User cancelled camera picker');
        //   return;
        // } else if (response.errorCode == 'camera_unavailable') {
        //   alert('Camera not available on device');
        //   return;
        // } else if (response.errorCode == 'permission') {
        //   alert('Permission not satisfied');
        //   return;
        // } else if (response.errorCode == 'others') {
        //   alert(response.errorMessage);
        //   return;
        // }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
      
    }
  

  const chooseFile = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    const result= await ImagePicker.launchImageLibrary(options);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    navigation.navigate('CameraScreen')
    console.log('result',result)
    }
  
      // if (response.didCancel) {
      //   alert('User cancelled camera picker');
      //   return;
      // } else if (response.errorCode == 'camera_unavailable') {
      //   alert('Camera not available on device');
      //   return;
      // } else if (response.errorCode == 'permission') {
      //   alert('Permission not satisfied');
      //   return;
      // } else if (response.errorCode == 'others') {
      //   alert(response.errorMessage);
      //   return;
      // }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
    


  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'transparent' }}>
     
      <View style={styles.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
         {image ? (
                <Image
                  source={{ uri: image }}
                  style={styles.imageStyle}
                  // resizeMode="cover"
                />
              ) : (
                <FontAwesome name="user" color="#777777" size={20}  />
              )}
        {/* <Text style={styles.textStyle}>{filePath.uri}</Text> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <FormButton title={"Open Modal"}     onPress={() => navigation.navigate('Modal')}/>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 400,
    height: 400,
    margin: 5,
    backgroundColor:'pink'
  },
});