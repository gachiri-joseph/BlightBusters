/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../../screens/Home/ProfileScreen';
import SettingsScreen from '../../screens/Home/SettingsScreen';
import CustomDrawer from '../../components/CustomDrawer';
import BottomTabNav from './bottomTabNav';
import {COLORS} from '../../constants/theme';
import DrawerHeader from '../../components/DrawerHeader';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        header: ({navigation, route, options}) => {
          return <DrawerHeader navigation={navigation} />;
        },
        headerStyle: {
          height: 80,
        },
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          marginLeft: -15,
          // fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="HomeTab"
        component={BottomTabNav}
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({color}) => (
            <Ionicons name="settings" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
