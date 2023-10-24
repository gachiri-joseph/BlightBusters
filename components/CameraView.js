import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CameraView = ({photo, retakePhoto, savePhoto}) => {
//   console.log('sdsfds', photo);
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <ImageBackground
        source={{
          uri: `file://'${photo}`,
        }}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            
            position:'absolute',
            bottom:20,
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={retakePhoto}
            style={{
              width: 130,
              height: 40,
              backgroundColor:'',
              alignItems: 'center',
              borderRadius: 4,
            }}>
                  <MaterialCommunityIcons name="camera-retake" color={COLORS.white} size={32} />
               
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={savePhoto}
            style={{
              width: 130,
              height: 40,

              alignItems: 'center',
              borderRadius: 4,
            }}>
            <MaterialCommunityIcons name="check" color={COLORS.white} size={32} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CameraView;
