import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Text,
} from 'react-native-paper';
import {COLORS,SIZES} from '../../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ProfileScreen = ({navigation}) => {


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topUserInfoSection}>
        <View style={{ flexDirection: 'column', marginTop: 15 ,justifyContent:'flex-start',alignItems:'center'}}>
          <Avatar.Image
            source={require('../../assets/images/135.png')}
            size={110}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>hey there, John Doe</Title>
        
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="location" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20,fontSize:20 }}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20,fontSize:20  }}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Feather name="mail" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20,fontSize:20  }}>john_doe@email.com</Text>
        </View>
      </View>


    
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topUserInfoSection: {
  
    justifyContent:'center',
    alignItems:'center',
   paddingHorizontal:20,
    height:200,
    backgroundColor:COLORS.gray2,
    marginBottom: 25,
  },
  userInfoSection: {
  
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    // paddingHorizontal: 20,

    backgroundColor:'pink'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {

    flexDirection: 'row',
    justifyContent:'flex-start',
    marginBottom: 20,
    backgroundColor:'black'
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
});
