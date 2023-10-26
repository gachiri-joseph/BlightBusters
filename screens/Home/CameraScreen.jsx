import React, {useEffect, useState, useRef,useCallback, useMemo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  Pressable,
} from 'react-native';
import {Camera,onMediaCaptured,useFrameProcessor} from 'react-native-vision-camera';
import {useAppState} from '@react-native-community/hooks';
import {useIsFocused} from '@react-navigation/native';
import CameraView from '../../components/CameraView';
import * as ImagePicker from 'react-native-image-picker';
import CameraButton from '../../components/CameraButton';
import IconButton from '../../components/IconButton';
import CameraRow from '../../components/CameraRow';
import CameraInfo from '../../components/CameraInfo';
// ...

const CameraScreen = ({navigation}) => {
  const camera = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find(d => d.position === 'back');
  // console.log(devices)
  // const [startCamera,setStartCamera] = useState(false)
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState(null);
  const currentAppState = useAppState();
  const isFocused = useIsFocused();
  const [flashOn,setFlashOn]=useState(false)
  const isActive = isFocused && currentAppState === 'active';
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log('isActive////////////////////////////', isActive);
  const takePhotoOptions = useMemo(
    () => ({
      // photoCodec: 'jpeg',
      // qualityPrioritization: 'speed',
      flash:  flashOn ?'on':'off',
      quality: 90,
      enableShutterSound: false,
    }),
    [flashOn],
  )
  useEffect(() => {
    async function getPermission() {
      const cameraPermission = await Camera.getCameraPermissionStatus();

      const newCameraPermission = await Camera.requestCameraPermission();
      if (cameraPermission || newCameraPermission === 'granted') {
        setShowCamera(true);
      }
      if (newCameraPermission === 'denied') await Linking.openSettings();

      // console.log('permission', newCameraPermission);
    }
    getPermission();
  }, []);

  
  //#region Camera Capture
  const capturePhoto= useCallback(async () => {
    try {
      if (camera.current == null) throw new Error('Camera ref is null!')

      console.log('Taking photo...')
      const photo = await camera.current.takePhoto(takePhotoOptions)

      setImageSource(photo.path);
      setShowCamera(false);
      console.log('photo',photo);
    } catch (e) {
      console.error('Failed to take photo!', e)
    }
  }, [camera, onMediaCaptured, takePhotoOptions])

  // const capturePhoto = async () => {
  //   if (camera.current !== null) {
  //     const photo = await camera.current.takePhoto({
  //       flash: flashOn ?'on':'off'
  //     });
  //     setImageSource(photo.path);
  //     setShowCamera(false);
  //     console.log('photo',photo);
  //   }
  // };
  const chooseFile = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageSource(imageUri);
      }
    });
  };

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
  const onModalClose = () => {
    setIsModalVisible(false);
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
      {showCamera && isActive && imageSource === null ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photo={true}
          />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              top: 0,
              paddingTop: 20,
            }}>
            <IconButton
              icon={'close-circle'}
              onPress={() => navigation.goBack()}
            />
            <IconButton
              icon={flashOn ?'flash':'flash-off'}
              onPress={() => setFlashOn(!flashOn)}
            />
          </View>

          {/* <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <MaterialCommunityIcons
              name="close-circle"
              color={COLORS.white}
              size={35}
            />
          </TouchableOpacity> */}
          <CameraRow>
            <Pressable
              style={{
                width: 60,
                height: 40,
                alignItems: 'center',
                borderRadius: 4,
              }}
              onPress={() => chooseFile('photo')}>
              <View style={{borderRadius: 10}}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 10}}
                  source={require('../../assets/images/gallery.jpg')}
                />
              </View>
            </Pressable>
            <CameraButton onPress={() => capturePhoto()} />
            <CameraInfo isVisible={isModalVisible} onClose={onModalClose} />
            <IconButton
              type={'icon'}
              icon={'information'}
              onPress={() => setIsModalVisible(true)}
            />
          </CameraRow>
        </>
      ) : (
        <View
          style={{
            backgroundColor: 'black',
            flex: 1,
            width: '100%',
            height: '100%',
          }}></View>
      )}
      {imageSource !== null ? (
        <CameraView
          photo={imageSource}
          savePhoto={savePhoto}
          retakePhoto={retakePhoto}
        />
      ) : null}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },

  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default CameraScreen;
