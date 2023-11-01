import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Avatar, Title, Text} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import InputContainer from '../../components/InputContainer';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import FormButton from '../../components/FormButton';


const ProfileScreen = ({navigation, route}) => {
  // const dispatch=useDispatch()
//  const userData=route.params.user
console.log('params',route.params)
  async function handleLogout() {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch(e) {
      showMessage({
        message: 'failed to log out!',
        type: 'danger',
        icon: 'danger',
      });
    }
  }
  return (<></>
    // <ScrollView style={styles.container}>
    //   <View style={styles.topUserInfoSection}>
    //     <View
    //       style={{
    //         flexDirection: 'column',
    //         marginTop: 15,
    //         justifyContent: 'flex-start',
    //         alignItems: 'center',
    //       }}>
    //       <Avatar.Image
    //        source={{uri: userData ? userData.userImg :'https://images.unsplash.com/photo-1698694326956-026c3f4c986b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'}}
    //         size={140}
    //       />
    //       <View style={{marginLeft: 20}}>
    //         <Title
    //           style={[
    //             styles.title,
    //             {
    //               marginTop: 15,
    //               marginBottom: 5,
    //             },
    //           ]}>
    //        hello there, {userData ? userData.username || 'User' : 'User'} 
    //         </Title>
    //       </View>
    //     </View>
    //   </View>

    //   <View style={styles.userInfoSection}>
    //     <InputContainer iconType={'user'} placeholder={userData ? userData.username || 'User' : 'User'}  />
    //     <InputContainer iconType={'phone'} placeholder={userData ? userData.phone || '0712345678' : '0712345678'} />
    //     <InputContainer
    //       iconType={'envelope'}
    //       placeholder={userData ? userData.email || 'User@email.com' : 'User@email.com'} 
    //     />
    //     <InputContainer
    //       iconType={'location-dot'}
    //       placeholder={userData ? userData.location || 'User location' : 'User location'} 
    //     />
    //     <FormButton title="log out" onPress={handleLogout} />
    //     <FormButton title="Delete Account" onPress={() => {}} />
    //   </View>
    // </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 200,
    marginVertical: 28,
  },
  SecondaryContainer: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 28,
    backgroundColor: COLORS.white,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    // paddingBottom: 20,
  },
  userInfoSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'flex-start',
    marginBottom: 20,
    backgroundColor: 'black',
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
