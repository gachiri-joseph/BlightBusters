import React, {useEffect, useRef} from 'react';
import {View, Image, Animated, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Duration for fade-in animation
      useNativeDriver: true,
    }).start();

    // Wait for a few seconds before transitioning to the next screen
    const timer = setTimeout(() => {
      // Replace 'Login' with the screen you want to navigate to
    }, 3000); // Wait for 3 seconds before transitioning

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        <Image
          source={require('../../assets/images/131.png')} // Replace with your own logo image
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
