import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  const [obsecureText, setObsecureText] = useState(false);

  const {
    LoginTextInputContainer,
    LoginTextInputInnerContainer,
    LoginTextInputIcon,
  } = styles;
  return (
    <View>
      <View style={LoginTextInputContainer}>
        <View style={LoginTextInputInnerContainer}>
          <MaterialIcons
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
            {iconType === 'lock' ? (
              <MaterialCommunityIcons
                name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={'black'}
              />
            ) : (
              <></>
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
