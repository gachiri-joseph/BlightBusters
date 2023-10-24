import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants/theme'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const InputContainer = ({iconType,placeholder}) => {
  return (
    <View style={styles.LoginTextInputContainer}>
    <View style={styles.LoginTextInputInnerContainer}>
    <FontAwesome6 name={iconType}color="#777777" size={20}   style={styles.LoginTextInputIcon}/>
      <View style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}} >
      <Text style={{ color: "#777777", marginLeft: 20,fontSize:20 }}>{placeholder}</Text>
      </View>    
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
   
    LoginTextInputContainer: {
      width: '100%',
      marginBottom: 20,
      // marginHorizontal:20,
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
  
export default InputContainer