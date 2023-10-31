import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {setloading} from '../redux/slices/loadingSlice';
import AuthStack from './auth/AuthStackNav';

import LoadingScreen from '../screens/Home/LoadingScreen';
import {setUser} from '../redux/slices/userSlice';
// import AppStackNav from './app/appStackNav';
import AppStackNav from './app/AppStack';
// import SplashScreen from '../screens/Home/SplashScreen';

const Routes = () => {
  const dispatch = useDispatch();
  const [userr, isUser] = useState(true);
  const isLoading = useSelector(state => state.loading);

  useEffect(() => {
    const redirect = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
        console.log(user);
        isUser(true);
        dispatch(setloading(false));
      } else {
        dispatch(setUser(null));
        isUser(false);
      }
    });

    return redirect;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  Comment Below stack for Development Mode /////
  //  UnComment Below stack for Production Mode /////

  return (
    <NavigationContainer>
      {isLoading ? <LoadingScreen /> : userr ? <AppStackNav/> : <AuthStack />}
    </NavigationContainer>
  );

  //   ///  {/* Developent Mode  */}  ///
  //   ///  {/* UnComment below Stack for App */}  ///
  // return (
  //   <NavigationContainer>
  //      < AppStackNav/>
  //   </NavigationContainer>
  // );
};

export default Routes;
