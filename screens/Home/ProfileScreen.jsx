import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants/theme';
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
  topUserInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 200,
    marginVertical: 28,
  },
  userInfoSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: SIZES.h1,
    fontFamily:'OpenSans-Medium',
  },
});
