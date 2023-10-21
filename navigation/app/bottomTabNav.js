/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CameraScreen from '../../screens/Home/CameraScreen.jsx';
import {COLORS} from '../../constants/theme.js';
import PlantScreen from '../../screens/Home/PlantScreen.jsx';
import HomeStackNav from './homeStackNav.js';
import ProfileStackNav from './ProfileStackNav.js';

const BottomTab = createBottomTabNavigator();
//the overall tab navigation options
const screenOptions = {
  tabBarShowLabel: 'true',
  backBehavior: 'history',
  tabBarHideOnKeyboard: false,
  headerShown: false,
  tabBarStyle: {
    positon: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
    // backgroundColor:'red'
  },
};
const BottomTabNav = () => {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNav}
        options={{
          title:'',
          tabBarLabel: 'Home',
          tabBarHideOnKeyboard:true,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
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
          tabBarLabel: 'Diagnose',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
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
          tabBarLabel: 'My plants',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: ({focused, color, position}) => {
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
      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileStackNav}
        options={{
          tabBarLabel: 'My account',
          tabBarHideOnKeyboard:true,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name={focused ? 'user-circle' : 'user-circle-o'}
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
