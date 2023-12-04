import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import ForgetPasswordScreenStyles from './forgotPasswordScreen.styles';
import FormButton from '../../components/FormButton';
import {COLORS} from '../../constants/theme';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import {validateEmail} from '../../utils/validateInput';
const ForgetPasswordScreen = () => {
  const {container, title, subtitle, textinput} = ForgetPasswordScreenStyles;
  const [email, setEmail] = useState('');
  return (
    <View style={container}>
      <Text style={title}>Forgot Password</Text>
      <Text style={subtitle}>
        Enter your email address below and we will send you an email with
        instructions on how to change your password.
      </Text>
      <View>
        <TextInput
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={COLORS.black}
          style={textinput}
        />
      </View>
      <FormButton
        onPress={async () => {
          try {
            if (email === '') {
              showMessage({
                message: 'please fill in all fields!',
                type: 'danger',
                icon: 'danger',
              });
            } else {
              validateEmail(email.trim());

              await auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                  showMessage({
                    message: 'please check your email!',
                    type: 'success',
                    icon: 'success',
                  });
                })
                .catch(e => {
                  showMessage({
                    message: 'password reset failed',
                    type: 'danger',
                    icon: 'danger',
                  });
                });
            }
          } catch (error) {
            showMessage({
              message: 'password reset failed',
              type: 'danger',
              icon: 'danger',
            });
          
          }
        }}
        title="Send"
      />
    </View>
  );
};

export default ForgetPasswordScreen;
