import React, {useState} from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import { COLORS, SIZES } from '../constants/theme';

const CameraModal = ({isVisible, onClose}) => {
    const [imageSource, setImageSource] = useState(null);
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
          await ImagePicker.launchCamera(options,response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              // let imageUri = response.uri || response.assets?.[0]?.uri;
              setImageSource(response.assets[0].uri);
            }
          });
        } catch (err) {
          console.log(err);
        }
    }};
    const chooseFile = async type => {
      let options = {
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      try {
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
      } catch (err) {
        console.log(err);
      }
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
              onPress={() => chooseFile('photo')}>
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
            onPress={() => takePhotoFromCamera('photo')}>
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
      <Pressable
        onPress={onClose}
        style={{backgroundColor: 'rgba(0,255,0,0.1)', borderRadius: 6}}>
        <MaterialCommunityIcons name="close" color={COLORS.gray} size={32} />
      </Pressable>
    </View>
  </Modal>
  )
}
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
export default CameraModal