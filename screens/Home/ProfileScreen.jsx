import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native';
import {Avatar, Title, Text} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import InputContainer from '../../components/InputContainer';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import FormButton from '../../components/FormButton';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/userSlice';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({navigation}) => {
  const user = useSelector(selectUser);
  const isFocused = useIsFocused();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    console.log('getting data');
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    // console.log('getting user')
    if (user) getUser();
  }, [user, isFocused]);

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

  if (loading) {
    <View  style={{
      flex:1,
      backgroundColor:COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
    }} >
      <ActivityIndicator color={COLORS.primary} size={'large'}/>
    </View>
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topUserInfoSection}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {userData?.userImg ? (
            <Avatar.Image source={{uri: userData.userImg}} size={140} />
          ) : (
            <View
              style={{
                backgroundColor: 'lightgrey',
                width: 140,
                height: 140,
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome6 name={'user'} color={'black'} size={50} />
            </View>
          )}

          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              hello there, {userData ? userData.username || 'User' : 'User'}
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <InputContainer
          iconType={'user'}
          placeholder={userData ? userData.username || 'User' : 'User'}
        />
        <InputContainer
          iconType={'phone'}
          placeholder={userData ? userData.phone || '0712345678' : '0712345678'}
        />
        <InputContainer
          iconType={'envelope'}
          placeholder={
            userData ? userData.email || 'User@email.com' : 'User@email.com'
          }
        />
        <InputContainer
          iconType={'location-dot'}
          placeholder={
            userData ? userData.location || 'User location' : 'User location'
          }
        />
        <FormButton title="log out" onPress={handleLogout} />
        <FormButton title="Delete Account" onPress={() => {}} />
      </View>
    </ScrollView>
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
