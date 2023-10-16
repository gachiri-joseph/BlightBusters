import {View, Text, Button} from 'react-native';
import React from 'react';

const CameraScreen = ({navigation}) => {
  return (
    <View>
      <Text>CameraScreen</Text>
      <Button title="next" onPress={() => navigation.navigate('Home')} />
      <Button title="next" onPress={() => navigation.navigate('Plants')} />
    </View>
  );
};

export default CameraScreen;
