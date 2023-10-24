import React from 'react';
import { View, ScrollView, StyleSheet,TouchableOpacity, Switch} from 'react-native';
import {
  Avatar,
  Title,
  Text,
} from 'react-native-paper';
import {COLORS} from '../../constants/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import InputContainer from '../../components/InputContainer';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({navigation}) => {

  async function handleLogout() {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (e) {
      showMessage({
        message: 'failed to log out!',
        type: 'danger',
        icon: 'danger',
      });
    }
  }
  return (
    <ScrollView   style={styles.container}>

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
        <InputContainer iconType={"phone"} placeholder={'+91-900000009'} />
        <InputContainer iconType={"envelope"} placeholder={'john_doe@email.com'} />
        <InputContainer iconType={"location-dot"} placeholder={'Kolkata, India'} />
      </View> 

      <View style={styles.SecondaryContainer}>
            <View style={styles.SecondaryCont}>
              <Text style={styles.subtitle}>Language</Text>
              <Switch
                style={{marginLeft: 'auto'}}
                // trackColor={{false: '#767577', true: '#81b0ff'}}
                // thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // value={notifications}
                // onChange={() => setNotifications(!notifications)}
              />
          </View>
      </View>
      <View style={styles.SecondaryContainer}>
        <TouchableOpacity>
        <View style={styles.SecondaryCont}>
        <Text style={styles.subtitle}>Logout</Text>
        <Feather
                  // style={{marginLeft: 'auto'}}
                  name="log-out"
                  color={COLORS.black}
                  size={20}
                  onPress={handleLogout}
                />
            
               
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.SecondaryCont}>
        <Text style={styles.subtitle}>Delete account</Text>
        <AntDesign
                  // style={{marginLeft: 'auto'}}
                  name="delete"
                  color={COLORS.black}
                  size={20}
                  onPress={()=>{}}
                />
              
               
                </View>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 20,
    fontWeight: 'bold',
  },
  SecondaryCont: {
    flex: 1,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    // backgroundColor:'black'
  },
  topUserInfoSection: {
  
    justifyContent:'center',
    alignItems:'center',
   paddingHorizontal:20,
    height:200,
    marginBottom: 25,
  },
  SecondaryContainer:{

    marginHorizontal: 20,
    marginTop: 28,
    marginBottom:28,
    backgroundColor: COLORS.white,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    // paddingBottom: 20, 
  },
  userInfoSection: {
  
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 20,
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
