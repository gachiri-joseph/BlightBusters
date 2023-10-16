import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '../../screens/Home/LoadingScreen';
import EditProfileScreen from '../../screens/Home/EditProfileScreen';
import DrawerNav from './drawerNav';


const AppStack = createNativeStackNavigator();

const AppStackNav = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      {/* <AppStack.Screen name="Splash" component={SplashScreen} /> */}
      <AppStack.Screen name="Drawers" component={DrawerNav} />
      <AppStack.Screen name="Load" component={LoadingScreen} />
      <AppStack.Screen name="EditProfile" component={EditProfileScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNav;
