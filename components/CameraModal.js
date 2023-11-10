import React, {useState} from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import {COLORS, SIZES} from '../constants/theme';
import axios from 'axios';
import PermissionsService from '../utils/permissions';
const baseUrl = url;

const CameraModal = ({isVisible, onClose}) => {
  axios.interceptors.request.use(
    async config => {
      let request = config;
      // console.log('this ruuuuuun')
      request.headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      };
      request.url = configureUrl(config.url);
      return request;
    },
    error =>console.log('errrrrrr',error),
  );

  const configureUrl = url => {
    let authUrl = url;
    if (url && url[url.length - 1] === '/') {
      authUrl = url.substring(0, url.length - 1);
    }
    return authUrl;
  };

  const getPredication = async params => {
    return new Promise((resolve, reject) => {
      var bodyFormData = new FormData();
      bodyFormData.append('file', params);
      const url = baseUrl;
      return axios
        .post(url, bodyFormData)
        .then(response => {
          // console.log("///////////////////////",response);
          resolve(response);
        })
        .catch(error => {
          setLabel('Failed to predicting.');
          reject('err', error);
        });
    });




    // let bodyFormData = new FormData();
    // bodyFormData.append('file', params);
    // const url = baseUrl;
    // try {
    //   await axios
    //     .post(url, bodyFormData)
    //     .then(response => {
    //       console.log("///////////////////////",response);
          
    //       // handle the response

       
    //     })
    //     .catch(error => {
    //       // handle errors
    //       setLabel('Failed to predicting.');
    //       console.log('errrrrrrrrrrrrrrorrrrrr////////',error);
    //     });
    //     return 
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const getResult = async (path, response) => {
    setImageSource(path);
    setLabel('Predicting...');
    setResult('');
    // console.log('label', label);
    // console.log('result', result);
    const params = {
      uri: path,  type: "image/jpeg",
      name: "image.jpg",
      // name: response.assets[0].fileName,
      // type: response.assets[0].type,
    };
    const res = await getPredication(params);
    console.log("///////////////////////res",res);
    if (res?.data?.class) {
      setLabel(res.data.class);
      setResult(res.data.confidence);
      console.log('label////////////', label);
      console.log('result/////////////', result);

      

    } else {
      setLabel('Failed to predict');
      console.log('Failed to predict', label);
    }
  };
  const manageCamera = async type => {
    try {
      if (!(await PermissionsService.hasCameraPermission())) {
        return [];
      } else {
        if (type === 'Camera') {
          takePhotoFromCamera();
        } else {
          console.log('here upload');
          chooseFile();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const [imageSource, setImageSource] = useState(null);
  // const requestCameraPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         {
  //           title: 'Camera Permission',
  //           message: 'App needs camera permission',
  //         },
  //       );
  //       // If CAMERA Permission is granted
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else return true;
  // };
  const takePhotoFromCamera = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
      quality: 1,
      saveToPhotos: true,
      includeBase64: true,
    };

    try {
      await ImagePicker.launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const uri = response?.assets[0]?.uri;
          console.log('uri',uri)
          const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
          getResult(path, response);
        }
      });
    } catch (err) {
      console.log(err);
    }
    // let isCameraPermitted = await requestCameraPermission();
    // // let isStoragePermitted = await requestExternalWritePermission();
    // if (isCameraPermitted) {
    //   try {
    //     await ImagePicker.launchCamera(options, response => {
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('Image picker error: ', response.error);
    //       } else {
    //         // let imageUri = response.uri || response.assets?.[0]?.uri;
    //         // setImageSource(response.assets[0].uri);
    //         const uri = response?.assets[0]?.uri;
    //         const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
    //         getResult(path, response);
    //       }
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // else{

    //   Alert.alert(
    //     'Image uploaded!',
    //     'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
    //   );
    //   }
  };
  const chooseFile = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,    quality: 1,
    };
    try {
      await ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const uri = response.assets[0].uri;
          console.log('uri',uri)
          const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
          getResult(path, response);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const clearOutput = () => {
    setResult('');
    setImageSource('');
  };

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.InfoCont}>
          <Text
            style={{
              color: COLORS.white,
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: SIZES.h2,
            }}>
            Identify
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: SIZES.width / 4,
                  height: SIZES.width / 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,255,50,0.2)',
                  borderRadius: 15,
                }}
                onPress={() => manageCamera('Photo')}>
                <MaterialIcons
                  name={'photo'}
                  size={30}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: COLORS.white,
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: SIZES.h3,
                }}>
                Upload
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: SIZES.width / 4,
                  height: SIZES.width / 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,255,50,0.2)',
                  borderRadius: 15,
                }}
                onPress={() => manageCamera('Camera')}>
                <MaterialIcons
                  name={'photo-camera'}
                  size={30}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: COLORS.white,
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: SIZES.h3,
                }}>
                Camera
              </Text>
            </View>
          </View>
        </View>
        <Text style={{color:'white'}}>{label}</Text>
        <Text style={{color:'white'}}>{result}</Text>
        <Pressable
          onPress={onClose}
          style={{backgroundColor: 'rgba(0,255,0,0.1)', borderRadius: 6}}>
          <MaterialCommunityIcons name="close" color={COLORS.gray} size={32} />
        </Pressable>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContent: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  InfoCont: {
    margin: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: 'grey',
  },
});
export default CameraModal;