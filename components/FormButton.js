import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';

const FormButton = ({title, onPress}) => {
  const {btnText, btnContainer} = styles;
  return (
    <TouchableOpacity style={btnContainer} onPress={onPress}>
      <Text style={btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    width: '100%',
    marginVertical: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  btnText: {
    // fontFamily:'serif',
    color: COLORS.white,
    fontSize: 18,
  },
});
export default FormButton;
