import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  validateEmail,
  validateMatchPassword,
  validatePassword,
} from '../../utils/validateInput';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {setloading} from '../../redux/slices/loadingSlice';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {SIZES, COLORS} from '../../constants/theme';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async () => {
    // input validation
    password === '' || email === '' || confirmPassword === ''
      ? showMessage({
          message: 'please fill in all fields!',
          type: 'danger',
          icon: 'danger',
        })
      : validateEmail(email)
      ? validatePassword(password)
        ? validateMatchPassword(password, confirmPassword)
          ? await createAccount()
          : showMessage({
              message: 'your passwords do not match!',
              type: 'danger',
              icon: 'danger',
            })
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

  const createAccount = async () => {
    dispatch(setloading(true));

    try {
      await auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(async credentials => {
          console.log('credentials', credentials);
          await addUserToDb(credentials?.user?.uid);
          showMessage({
            message: 'account created successfully and signed in !',
            type: 'success',
            icon: 'success',
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            showMessage({
              message: 'user already exists, go to login!',
              type: 'danger',
              icon: 'danger',
            });
          }
        })
        .finally(() => {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        });
      dispatch(setloading(false));
    } catch (e) {
      showMessage({
        message: 'failed to create account!',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  //add user to the firesbase firestore database based on the user uid
  //the set method is used as we are specifying our own id
  //otherwise add is used ,the method adds the new document to your collection with a random unique ID

  const addUserToDb = async userid => {
    try {
      await firestore()
        .collection('Users')
        .doc(userid)
        .set({
          fname: '',
          lname: '',
          phone: '',
          location:'',
          email: email,
          createdAt: firestore.Timestamp.fromDate(new Date()),
          userImg: null,
        })
        .then(() => {
          console.log('User added!');
        })
        //ensure we catch any errors at this stage to advise us if something does go wrong
        .catch(error => {
          console.log(
            'Something went wrong with added user to firestore: ',
            error,
          );
        });
    } catch (error) {
      console.log('adding user to database', error);
    }
  };
  return (
    <Animated.ScrollView
      entering={FadeIn.duration(500).delay(200)}
      exiting={FadeOut.duration(300).delay(250)}>
      {/* <Text style={styles.text}>Create an account</Text> */}
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

        <FormInput
          title={'Confirm password'}
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirm your password"
          iconType="lock"
        />

        <FormButton title="Sign Up" onPress={() => register(email, password)} />
        {/*
 {!isLoading ? (
        <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email, password)}
      />
          ) : (
            <ActivityIndicator animating={true} color={#696AC3} />
          )} */}
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity
            // eslint-disable-next-line no-alert
            onPress={() => alert('Terms and conditions Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms and conditions
            </Text>
          </TouchableOpacity>
          {/* <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{...styles.navButtonText, color: COLORS.black}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{...styles.navButtonText, color: COLORS.primary}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: COLORS.black,
  },
});
