import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { SPACING, colors, sizes } from '../constants/theme';

const ScreenHeader = () => {
  const [greeting, setGreeting] = useState('');
  // const [icon, setIcon] = useState(null);

  useEffect(() => {
    const currentTime = new Date().getHours();
    let greetingMessage = '';
    // let iconPath = null;

    if (currentTime >= 5 && currentTime < 12) {
      greetingMessage = 'Good Morning';
      // iconPath = require('./morning-icon.png');
    } else if (currentTime >= 12 && currentTime < 18) {
      greetingMessage = 'Good Afternoon';
      // iconPath = require('./afternoon-icon.png');
    } else {
      greetingMessage = 'Good Evening';
      // iconPath = require('./evening-icon.png');
    }

    setGreeting(greetingMessage);
    // setIcon(iconPath);

    // Update the greeting and icon every minute (or as needed)
    const interval = setInterval(() => {
      const updatedTime = new Date().getHours();
      // Check if the time of day has changed
      if (
        (currentTime < 12 && updatedTime >= 12) ||
        (currentTime >= 12 && updatedTime < 12) ||
        (currentTime < 18 && updatedTime >= 18) ||
        (currentTime >= 18 && updatedTime < 18)
      ) {
        // Time of day has changed, update the greeting and icon
        if (updatedTime >= 5 && updatedTime < 12) {
          setGreeting('Good Morning');
          // setIcon(require('./morning-icon.png'));
        } else if (updatedTime >= 12 && updatedTime < 18) {
          setGreeting('Good Afternoon');
          // setIcon(require('./afternoon-icon.png'));
        } else {
          setGreeting('Good Evening');
          // setIcon(require('./evening-icon.png'));
        }
      }
    }, 60000); // Check every minute

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <View style={styles.container}>
<Text style={styles.mainTitle}>{greeting}</Text>
{/* {icon && <Image source={icon} style={{ width: 100, height: 100 }} />} */}
{/* <Text style={styles.mainTitle}>{mainTitle}</Text> */}
{/* <Text style={styles.secondTitle}>{secondTitle}</Text> */}
</View>
   
  );
};




const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.l,
  },
  mainTitle: {
    color:colors.black,
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  secondTitle: {
    color:colors.black,
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
