import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ForgetPasswordScreenStyles from './forgotPasswordScreen.styles';
import FormButton from '../../components/FormButton';
import {COLORS} from '../../constants/theme';
const ForgetPasswordScreen = () => {
  const {container, title, subtitle, textinput} = ForgetPasswordScreenStyles;

  return (
    <View style={container}>
      <Text style={title}>Forgot Password</Text>
      <Text style={subtitle}>
        Enter your email address below and we will send you an email with
        instructions on how to change your password.
      </Text>

      <View>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={COLORS.black}
          style={textinput}
        />
      </View>
      <FormButton
        onPress={() => {
          console.log('reset email');
        }}
        title={'Send'}
      />
    </View>
  );
};

export default ForgetPasswordScreen;
