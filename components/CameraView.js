import {View, Image} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {COLORS} from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CameraView = ({photo, retakePhoto, savePhoto}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        width: '100%',
        height: '100%',
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: wp(75), height: hp(40)}}>
        <Image
          style={{width: '100%', height: '100%',resizeMode:'contain'}}
          source={{
            uri: `file://'${photo}`,
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: wp(10),
        }}>
        <IconButton icon={'close-circle'} onPress={retakePhoto} />
        <IconButton icon={'check'} onPress={savePhoto} />
      </View>
    </View>
  );
};

export default CameraView;
