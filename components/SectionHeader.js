import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import { COLORS, colors, SIZES, sizes,SPACING } from '../constants/theme';

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Button title={buttonTitle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: SPACING.l,
    marginRight: SPACING.m,
    marginTop: SPACING.l,
    marginBottom: 10,
  },
  title: {
    width:SIZES.xxLarge + 200,
    color:COLORS.primary,
    fontSize: sizes.h2,
    fontFamily:'OpenSans-SemiBold'
  },
});

export default SectionHeader;
