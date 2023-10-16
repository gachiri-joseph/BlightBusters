import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingScreen from '../../screens/Home/OnBoardingScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
// import PhoneLoginScreen from '../../screens/auth/PhoneLoginScreen';
// import PhoneSignUpScreen from '../../screens/auth/PhoneSignUpScreen';
import ForgetPasswordScreen from '../../screens/Auth/ForgetPasswordScreen';
const NativeStack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      // AsyncStorage.removeItem('alreadyLaunched')
      if (value === null) {
        // console.log("AlreadyLauch",AsyncStorage.getItem('alreadyLaunched'))

        AsyncStorage.setItem('alreadyLaunched', 'true');
        // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some esrror handling, also you can simply do setIsFirstLaunch(null)

    // GoogleSignin.configure({
    //   webClientId: 'YOUR_APP_WEB_CLIENT_ID',
    // });
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <NativeStack.Navigator initialRouteName={routeName}>
      <NativeStack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{header: () => null}}
      />
      <NativeStack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerTitle: 'Log into BlightBusters',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
      <NativeStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerTitle: 'Join BlightBusters',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
      <NativeStack.Screen
        name="ForgotPassword"
        component={ForgetPasswordScreen}
        options={({navigation}) => ({
          title: '',
          headerTitle: 'Reset password',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </NativeStack.Navigator>
  );
};

export default AuthStack;
