import {View, Text, Button} from 'react-native';
import React from 'react';

const PlantScreen = ({navigation}) => {
  return (
    <View>
      <Text>PlantScreen</Text>
      <Button title="next" onPress={() => navigation.navigate('Home')} />
      <Button title="next" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
};

export default PlantScreen;
