import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {useAppState} from '@react-native-community/hooks';
import {useIsFocused} from '@react-navigation/native';
import CameraView from '../../components/CameraView';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/theme';
// ...

const CameraScreen = ({navigation}) => {
  const camera = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find(d => d.position === 'back');
  // console.log(devices)
  // const [startCamera,setStartCamera] = useState(false)
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const currentAppState = useAppState();
  const isFocused = useIsFocused();
  const isActive = isFocused && currentAppState === 'active';
  console.log(isActive);

  useEffect(() => {
    async function getPermission() {
      const cameraPermission = await Camera.getCameraPermissionStatus();

      const newCameraPermission = await Camera.requestCameraPermission();
      if (cameraPermission || newCameraPermission === 'granted') {
        setShowCamera(true);
      }
      if (newCameraPermission === 'denied') await Linking.openSettings();

      console.log(newCameraPermission);
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo);
    }
  };
  const chooseFile = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    const result= await ImagePicker.launchImageLibrary(options);
  
      if (!result.canceled) {
        setImageSource(result.assets[0].uri);
      }
    // navigation.navigate('CameraScreen')
    console.log('result',result)
    }

    
  const retakePhoto = () => {
    setImageSource(null);
    // setPreviewVisible(false)
    setShowCamera(true);
  };

  const savePhoto = () => {
    setImageSource(null);
    // setPreviewVisible(false)
    setShowCamera(true);
  };
  if (device == null) {
    return (
      <>
        <Text style={{color: 'black'}}>Camera not available</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {showCamera && isActive ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photo={true}
          />
           <TouchableOpacity
              onPress={()=>navigation.goBack()}
              style={styles.backButton}>
              <MaterialCommunityIcons
                name="close-circle"
                color={COLORS.white}
                size={35}
              />
            </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={chooseFile}
              style={{
                width: 60,
                height: 40,
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <View style={{borderRadius: 10}}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 10}}
                  source={require('../../assets/images/gallery.jpg')}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.camButton}
                onPress={() => capturePhoto()}
              />
            </View>
            <TouchableOpacity
              onPress={()=>{}}
              style={{
                width: 60,
                height: 40,
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <MaterialCommunityIcons
                name="information"
                color={COLORS.white}
                size={35}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <CameraView
              photo={imageSource}
              savePhoto={savePhoto}
              retakePhoto={retakePhoto}
            />
          ) : // <Image
          //   style={styles.image}
          //   source={{
          //     uri: `file://'${imageSource}`,
          //   }}
          // />
          null}

          {/* <View style={styles.backButton}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fff',
                width: 100,
              }}
              onPress={() => setShowCamera(true)}>
              <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#77c3ec',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                  Retake
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#77c3ec',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Use Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* <ActivityIndicator size={'large'} /> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'gray',
  },
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    // backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: COLORS.primary,

    // alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default CameraScreen;
