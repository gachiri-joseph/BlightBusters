import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {setItem} from '../../utils/asyncStorage';
import OnBoardingScreenStyles from './onBoardingScreen.styles';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const OnBoardingScreen = ({navigation}) => {
  //styles
  const {
    OnBoardingScreenContainer,
    OnBoardingScreenImageContainer,
    OnBoardingScreenDoneBtn,
    OnBoardingScreenDoneBtnText,
  } = OnBoardingScreenStyles;
  //functions
  const handleDone = () => {
    navigation.replace('Login');
    setItem('onBoarded', '1');
  };
  //returns a done button component
  const doneButton = () => {
    return (
      <Animated.View
        entering={FadeIn.duration(300).delay(250)}
        exiting={FadeOut.duration(250).delay(200)}>
        <TouchableOpacity
          style={OnBoardingScreenDoneBtn('white')}
          onPress={handleDone}>
          <Text style={OnBoardingScreenDoneBtnText}>done</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };


  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View style={OnBoardingScreenContainer}>
        <Onboarding
          onDone={handleDone}
          onSkip={handleDone}
          DoneButtonComponent={doneButton}
          bottomBarHighlight={false}
          pages={[
            {
              backgroundColor: '#a7f3d7',
              image: (
                <View style={OnBoardingScreenImageContainer}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/images/129.png')}
                  />
                </View>
              ),
              title: 'Smart and fast results', //or component
              subtitle:
                'Our app uses cutting edge A.I to diagnose blght disease in your potato plants', //or component
            },
            {
              backgroundColor: '#d8a8f0',
              image: (
                <View style={OnBoardingScreenImageContainer}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/images/130.png')}
                  />
                </View>
              ),
              title: 'Easy and intutive',
              subtitle:
                'Just take a picture of your crop, send the picture and get an immediate diagnosis',
            },
            {
              backgroundColor: '#fef3c7',
              image: (
                <View style={OnBoardingScreenImageContainer}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/images/136.png')}
                  />
                </View>
              ),
              title: 'Saves you time and money',
              subtitle:
                'You no longer need to pay for experts to diagnose your plants',
            },
          ]}
        />
      </View>
    </>
  );
};

export default OnBoardingScreen;
