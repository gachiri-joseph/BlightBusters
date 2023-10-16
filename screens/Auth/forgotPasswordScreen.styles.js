import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const ForgetPasswordScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: SIZES.h1,
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: '500',
    color: COLORS.black,
  },
  textinput: {
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    fontSize: SIZES.h4,
    paddingVertical: 10,
    marginVertical: 30,
    color: COLORS.black,
  },
});

export default ForgetPasswordScreenStyles;
