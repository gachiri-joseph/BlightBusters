import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileStackNav from './ProfileStackNav';
import ResultsStackNav from './ResultsStackNav';
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
        name="resultsStack"
        options={{headerShown: false}}
        component={ResultsStackNav}
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
