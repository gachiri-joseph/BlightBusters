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
const SettingsScreen = () => {
  return (
 <View>
   <View style={styles.topUserInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 ,justifyContent:'flex-start',alignItems:'center'}}>
          <Avatar.Image
            source={require('../../assets/images/135.png')}
            size={110}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
        
          </View>
        </View>
      </View>
  <View style={{flexDirection:'column',justifyContent:'space-around',alignItems:'flex-start',marginHorizontal:20}}>
      <Text style={styles.sectionHeaderText}>Language</Text>
        <View style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Feather name="bell" size={18} color={COLORS.primary} />
            <Text style={styles.sectionText}>Notification</Text>
          </View>
          {/* <ToggleButton size={0.5} /> */}
        </View>
       <Text style={styles.sectionHeaderText}>Notifications</Text>
        <View style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Feather name="bell" size={18} color={COLORS.primary} />
            <Text style={styles.sectionText}>Notifications</Text>
          </View>
          {/* <ToggleButton size={0.5} /> */}
        </View>
        <Text style={styles.sectionHeaderText}>Theme</Text>
     <View style={styles.sectionContainer} activeOpacity={0.8}>
       <View style={styles.sectionTextContainer}>
         <Ionicons
           name="ios-color-palette-outline"
           size={18}
           color={COLORS.primary}
         />
         <Text style={styles.sectionText}>Dark Mode</Text>
       </View>
       {/* <ToggleButton size={0.5} /> */}
     </View>
  </View>
   
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