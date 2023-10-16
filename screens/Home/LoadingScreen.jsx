import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants/theme';
// import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/images/131.png')}
      />
      <ActivityIndicator size="large" color={COLORS.green} />
      {/* <LottieView
          source={require('../../assets/animations/Anime.json')}
          autoPlay
          loop={false}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container1: {
    width: '100%',
    paddingTop: '5%',
    paddingHorizontal: '10%',
  },
  image: {
    width: '80%',
    height: '30%',
  },
});

export default LoadingScreen;
