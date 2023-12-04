import React, {useContext, useState} from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  Platform,Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import {COLORS, SIZES} from '../constants/theme';
import axios from 'axios';
import PermissionsService from '../utils/permissions';
import LoadingDots from 'react-native-loading-dots';
import InnerModal from './InnerModal';
import {NetContext} from '../context/NetProvider';
const baseUrl = 'https://lulranger-blightbusters2.hf.space/predict';

// const baseUrl = 'https://us-central1-blightbusters.cloudfunctions.net/predict';

const CameraModal = ({isVisible, onClose, navigation}) => {
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
    error => console.log('errrrrrr', error),
  );

  const configureUrl = url => {
    let authUrl = url;
    if (url && url[url.length - 1] === '/') {
      authUrl = url.substring(0, url.length - 1);
    }
    return authUrl;
  };

  const {offline, showAlert} = useContext(NetContext);
  // console.log('offline', offline);

  const getPrediction = async params => {
    let bodyFormData = new FormData();
    bodyFormData.append('file', params);
    const url = baseUrl;
    try {
      const response = await axios.post(url, bodyFormData);
      // console.log("///////////////////////",response);
      return response;
    } catch (error) {
      setLabel('Failed to predicting.');
      Alert.alert('something went wrong', error.message, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);

      // console.log(error.message)
    }
  };
  const getResult = async (path, response) => {
    if (offline) {
      showAlert();
      return null;
    } else {
      setImageSource(path);
      setLabel('Predicting...');
      setResult('');
      // console.log('label', label);
      // console.log('result', result);
      const params = {
        uri: path,
        type: 'image/jpeg',
        name: 'image.jpg',
        // name: response.assets[0].fileName,
        // type: response.assets[0].type,
      };

      try {
        const res = await getPrediction(params);
        // console.log('///////////////////////res', res);
        if (res?.data?.class) {
          setLabel(res.data.class);
          setResult(res.data.confidence);
         
        } else {
          setLabel('Failed to predict');
          Alert.alert('something went wrong ❗','try again later 🕑', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);

          console.log('Failed to predict', label);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const manageCamera = async type => {
    if (type === 'Photo') {
      chooseFile();
    } else if (type === 'Camera') {
      try {
        const camera = await PermissionsService.hasCameraPermission();

        if (!camera) {
          return [];
        } else {
          takePhotoFromCamera();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const [imageSource, setImageSource] = useState(null);
 
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
          console.log('uri', uri);
          const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
          getResult(path, response);
        }
      });
    } catch (err) {
      console.log(err);
    }
 
  
  };
  const chooseFile = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
      quality: 1,
    };
    try {
      await ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const uri = response.assets[0].uri;
          console.log('uri', uri);
          const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
          getResult(path, response);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onCloseAll = () => {
    setResult('');
    setLabel('');
    setImageSource('');
    onClose();
  };
  if (label === 'Predicting...') {
    return (
      <Modal animationType="slide" visible={isVisible}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            paddingVertical: SIZES.height / 4,
          }}>
          <View
            style={{
              height: SIZES.height / 5,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              // backgroundColor:'pink'
            }}>
            <View
              style={{
                width: 50,
              }}>
              <LoadingDots
                dots={3}
                bouncingHeight={4}
                size={SIZES.small}
                colors={['#089000', '#0a5d00', '#063b00']}
              />
            </View>
         
            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'OpenSans-SemiBold',
                fontSize: SIZES.h3,
              }}>
              ANALYZING IMAGE
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'OpenSans-Medium',
                fontSize: SIZES.h4,
              }}>
              Please be patient,this might take a minute.
            </Text>
          </View>
        </View>
      </Modal>
    );
  }

  if (
    label === 'potato_healthy' ||
    label === 'potato_late_blight' ||
    label === 'Not_Disease' ||
    label === 'potato_early_blight' 
    // (label === 'potato_healthy' && result !== '')
  ) {
    return (
      <InnerModal
        isVisible={isVisible}
        onCloseAll={onCloseAll}
        label={label}
        result={result}
        imagePath={imageSource}
        navigation={navigation}
      />
    );
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => onCloseAll()}>
      <View style={styles.modalContent}>
        <View style={styles.InfoCont}>
          <Text
            style={{
              color: COLORS.black,
              marginTop: 10,
              fontFamily: 'OpenSans-Bold',
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
                  fontFamily: 'OpenSans-Bold',
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
                  fontFamily: 'OpenSans-Bold',
                  fontSize: SIZES.h3,
                }}>
                Camera
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={onCloseAll}
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
