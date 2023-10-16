import {SafeAreaView, Button} from 'react-native';
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Button title="next" onPress={() => navigation.navigate('Camera')} />
      <Button title="next" onPress={() => navigation.navigate('Plants')} />
      <Button
        title="clear firstlaunch"
        onPress={() => AsyncStorage.removeItem('alreadyLaunched')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
