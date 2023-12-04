import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Text,
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
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [tooltipVisible, setToolTipVisible] = useState(false);
  const getUser = async () => {
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
    if (user) getUser();
    // const setTip=setTimeOut(()=>setToolTipVisible(true),2000)

    // return ()=>clearTimeout(setTip);
  }, [user, isFocused]);

  const handleDeleteAccount = () => {
    setDeleteModalVisible(true); // Close the modal after account deletion
  };

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = async () => {
    setLogoutModalVisible(false);
    setDeleteModalVisible(false);
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
  };
// if(tooltipVisible){
//   return(
//     <View style={{position:'absolute',left:0}}>
//       <Text>press here to edit</Text>
//     </View>
//   )
// }
  if (loading) {
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={COLORS.primary} size={'large'} />
    </View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '70%',
              }}>
              <TouchableOpacity onPress={confirmLogout}>
                <Text style={styles.modalButtonRed}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
                <Text style={styles.modalButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete your account?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '70%',
              }}>
              <TouchableOpacity onPress={confirmLogout}>
                <Text style={styles.modalButtonRed}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.modalButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
        <FormButton title="Delete Account" onPress={handleDeleteAccount} />
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
    fontFamily: 'OpenSans-Medium',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: SIZES.h4,
    fontFamily: 'OpenSans-Regular',
    color: COLORS.primary,
    marginBottom: 20,
  },
  modalButton: {
    fontSize: SIZES.h3,
    fontFamily: 'OpenSans-Medium',
    color: COLORS.primary,
  },
  modalButtonRed: {
    fontSize: SIZES.h3,
    fontFamily: 'OpenSans-Medium',
    color: COLORS.red,
  },
});
