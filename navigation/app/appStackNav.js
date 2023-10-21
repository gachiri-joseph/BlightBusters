import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './bottomTabNav';

const AppStack = createNativeStackNavigator();

const AppStackNav = () => {
  return (
    <AppStack.Navigator >
       <AppStack.Screen name="BottomTab" options={{headerShown: false,}} component={BottomTabNav} />
    </AppStack.Navigator>
  );
};

export default AppStackNav;
