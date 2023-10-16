import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {SIZES, COLORS} from '../../constants/theme';
import {setItem} from '../../utils/asyncStorage';
import OnBoardingScreenStyles from './onBoardingScreen.styles';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    id: 1,
    title: 'Smart and fast results',
    description:
      'Our app uses cutting edge A.I to diagnose blght disease in your potato plants',
    image: require('../../assets/images/129.png'),
  },
  {
    id: 2,
    title: 'Easy and intutive',
    description:
      'Just take a picture of your crop, send the picture and get an immediate diagnosis',
    image: require('../../assets/images/130.png'),
  },
  {
    id: 3,
    title: 'Saves you time and money',
    description:
      'You no longer need to pay for experts to diagnose your plants',
    image: require('../../assets/images/136.png'),
  },
];

const OnBoardingScreen2 = ({navigation}) => {
  //styles
  const {OnBoardingScreenContainer} = OnBoardingScreenStyles;
  //
  const handleDone = () => {
    navigation.navigate('Login');
    setItem('onBoarded', '1');
  };
  //
  const buttonLabel = label => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={OnBoardingScreenContainer}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
                backgroundColor: `${
                  item.id === 1
                    ? '#a7f3d7'
                    : item.id === 2
                    ? '#fef3c7'
                    : '#a78bfa'
                }`,
              }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: COLORS.title,
                }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          handleDone();
        }}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen2;
