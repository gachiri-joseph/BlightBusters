import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileStackNav from './ProfileStackNav';
import HomeStackNav from './homeStackNav';

const AppStack = createNativeStackNavigator();

const AppStackNav = ({navigation}) => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="HomeStack"
        options={{headerShown: false}}
        component={HomeStackNav}
      />
    
      <AppStack.Screen
        name="ProfileStack"
        options={{headerShown: false}}
        component={ProfileStackNav}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNav;
