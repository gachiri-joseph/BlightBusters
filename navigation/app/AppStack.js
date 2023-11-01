import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import CameraScreen from '../../screens/Home/CameraScreen';
import DrawerHeader from '../../components/DrawerHeader';
import ProfileStackNav from './ProfileStackNav';
import LoadingAnalysisScreen from '../../screens/Home/LoadingAnalysisScreen';
import resultsStackNav from './ResultsStackNav';
import ResultsStackNav from './ResultsStackNav';
import { Title } from 'react-native-paper';

const AppStack = createNativeStackNavigator();

const AppStackNav = ({navigation}) => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        options={{
         
    headerTitle:'BlightBusters'
         
        }}
        component={HomeScreen}
      />
      <AppStack.Screen
        name="Camera"
        options={{headerShown: false}}
        component={CameraScreen}
      />
      <AppStack.Screen
        name="loadingAnalysis"
        options={{headerShown: false}}
        component={LoadingAnalysisScreen}
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
