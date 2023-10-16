/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraScreen from '../../screens/Home/CameraScreen.jsx';
import {COLORS} from '../../constants/theme.js';
import PlantScreen from '../../screens/Home/PlantScreen.jsx';
import HomeScreen from '../../screens/Home/HomeScreen.jsx';

const BottomTab = createBottomTabNavigator();
//the overall tab navigation options
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: false,
  headerShown: false,
  tabBarStyle: {
    positon: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
  },
};
const BottomTabNav = () => {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        //individual screen tab options
        //note how the focused property is placed
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'camera' : 'camera-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Plants"
        component={PlantScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'leaf' : 'leaf-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
