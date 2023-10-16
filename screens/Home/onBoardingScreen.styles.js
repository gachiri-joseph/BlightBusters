import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/theme';

const OnBoardingScreenStyles = StyleSheet.create({
  OnBoardingScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: SIZES.height,
  },
  OnBoardingScreenImageContainer: {
    width: SIZES.width * 0.9,
    height: SIZES.width,
  },
  OnBoardingScreenDoneBtn: backgroundColor => ({
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: backgroundColor,
    width: 90,
    height: 45,
    borderRadius: 25,
  }),
  OnBoardingScreenDoneBtnText: {
    color: 'black',
  },
});
export default OnBoardingScreenStyles;
