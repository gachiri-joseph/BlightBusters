import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormInput = ({labelValue, placeholderText, iconType, title, ...rest}) => {
  const [obsecureText, setObsecureText] = useState(false);

  const {
    LoginTextInputContainer,
    LoginTextInputInnerContainer,
    LoginTextInputLabel,
    LoginTextInputIcon,
  } = styles;
  return (
    <View>
      <View style={LoginTextInputContainer}>
        <Text style={LoginTextInputLabel}>{title}</Text>
        <View style={LoginTextInputInnerContainer}>
          <AntDesign
            name={iconType}
            size={25}
            color="#666"
            style={LoginTextInputIcon}
          />
          <TextInput
            secureTextEntry={!obsecureText}
            value={labelValue}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor="black"
            style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}}
            {...rest}
          />
          <TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
            {title === 'Email' ? (
              <></>
            ) : (
              <MaterialCommunityIcons
                name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={'black'}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  LoginTextInputContainer: {
    width: '100%',
    marginBottom: 20,
    // marginHorizontal:20,
  },
  LoginTextInputLabel: {
    fontFamily: 'regular',
    fontSize: SIZES.small + 4,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: 'right',
    color: COLORS.black,
  },
  LoginTextInputInnerContainer: {
    borderColor: 'black',
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 55,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  LoginTextInputIcon: {
    marginRight: 10,
  },
});
