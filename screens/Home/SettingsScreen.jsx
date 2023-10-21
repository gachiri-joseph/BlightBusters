import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS,SIZES} from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SettingsScreen = ({navigation}) => {
  return (
 <View>
   
 </View>
    
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({

  
  topUserInfoSection: {
    justifyContent:'center',
   paddingHorizontal:20,
    height:200,
    backgroundColor:COLORS.gray2,
    marginBottom: 25,
  },
 
  sectionHeaderText: {
    fontSize: 14,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: COLORS.black,
    marginTop: 25,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 13,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: COLORS.gray,
    marginLeft: 10,
  },
});