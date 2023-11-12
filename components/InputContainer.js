import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants/theme'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const InputContainer = ({iconType,placeholder}) => {
  return (
    <View style={styles.LoginTextInputContainer}>
    <View style={styles.SecondaryContainer}>
    <FontAwesome6 name={iconType}color={COLORS.black} size={20}   style={styles.LoginTextInputIcon}/>
      <View style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}} >
      <Text style={{ color: "#777777", marginLeft: 20,fontSize:SIZES.h3 ,fontFamily:'OpenSans-SemiBold'}}>{placeholder}</Text>
      </View>    
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  SecondaryContainer:{
    height: 55,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',

    backgroundColor: COLORS.white,
    elevation: 3,
    marginBottom:20,
    borderRadius: 10,
    // paddingBottom: 20, 
  },
    LoginTextInputContainer: {
      width: '100%',
      marginBottom: 20,
    },
  
    LoginTextInputIcon: {
      marginRight: 10,
    },
   
 
  });
  
export default InputContainer