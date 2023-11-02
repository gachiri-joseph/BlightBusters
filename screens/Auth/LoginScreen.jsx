import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import auth from '@react-native-firebase/auth';
import {validateEmail, validatePassword} from '../../utils/validateInput';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {setloading} from '../../redux/slices/loadingSlice';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {COLORS, SIZES} from '../../constants/theme';
const LoginScreen = ({navigation}) => {
  //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  const dispatch = useDispatch();
  const login = async () => {
    // input validation
    password === '' || email === ''
      ? showMessage({
          message: 'please fill in all fields!',
          type: 'danger',
          icon: 'danger',
        })
      : validateEmail(email.trim())
      ? validatePassword(password)
        ? await loginUser()
        : showMessage({
            message: 'your password is less than 8 characters!',
            type: 'danger',
            icon: 'danger',
          })
      : showMessage({
          message: 'make sure your email is in the right format!',
          type: 'danger',
          icon: 'danger',
        });
  };
  //
  const loginUser = async () => {
    dispatch(setloading(true));

    try {
      await auth()
        .signInWithEmailAndPassword(email.trim(), password)

        .then(async credentials => {
          // const user = credentials.user;
          showMessage({
            message: 'successfully logged in!',
            type: 'success',
            icon: 'success',
          });
          // setIsLoggedIn(true);
        })
        .catch(error => {
          // error.code === 'auth/wrong-password' ||
          // error.code === 'auth/user-not-found'

          showMessage({
            message: 'invalid credentials, try again!',
            type: 'danger',
            icon: 'danger',
          });
        })
        .finally(() => {
          setEmail('');
          setPassword('');
        });
      dispatch(setloading(true));
    } catch (e) {
      showMessage({
        message: 'failed to log in!',
        type: 'danger',
        icon: 'danger',
      });
    }
  };
  //

  return (
    <Animated.ScrollView
      entering={FadeIn.duration(500).delay(300)}
      exiting={FadeOut.duration(300).delay(250)}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/131.png')}
          style={{
            height: SIZES.height / 4,
            width: SIZES.width,
            resizeMode: 'contain',
            marginBottom: SIZES.xxLarge,
          }}
        />
        {/* <Text style={styles.text}>BLIGHT BUSTERS</Text> */}

        <FormInput
          title={'Email'}
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Enter your email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          title={'Password'}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Enter your password"
          iconType="lock"
        />

        <FormButton onPress={() => login(email, password)} title={'Sign In'} />
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: COLORS.black, fontSize: SIZES.large}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{...styles.navButtonText, color: COLORS.black}}>
            Don't have an acount?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{...styles.navButtonText, color: COLORS.primary}}>
              Create here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
    color: COLORS.black,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    // fontFamily: 'Lato-Regular',
  },
});
