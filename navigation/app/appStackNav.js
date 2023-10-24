import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './bottomTabNav';
import ModalScreen from '../../screens/Home/ModalScreen';

const AppStack = createNativeStackNavigator();

const AppStackNav = () => {
  return (
    <AppStack.Navigator >
       <AppStack.Screen name="BottomTab" options={{headerShown: false,}} component={BottomTabNav} />
    </AppStack.Navigator>
  );
};

export default AppStackNav;
