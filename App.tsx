import "react-native-gesture-handler";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import Routes from './navigation/routes';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  // please check developer mode in navigation.js before continuing.
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
        <FlashMessage
          position="top"
          animated
          statusBarHeight={40}
          titleStyle={{fontFamily: 'InterSoftMedium', fontSize: 16}}
          duration={3000}
        />
      </Provider>
    </GestureHandlerRootView>

    // <OnBoardingScreen/>
  );
}