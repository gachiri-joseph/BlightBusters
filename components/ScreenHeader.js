import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { sizes,SPACING,colors } from '../constants/theme';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
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