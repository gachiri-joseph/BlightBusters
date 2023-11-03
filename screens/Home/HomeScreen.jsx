import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {PLACES, TOP_PLACES} from '../../assets/data';
import ScreenHeader from '../../components/ScreenHeader';
import GetStarted from '../../components/GetStarted';
import SectionHeader from '../../components/SectionHeader';
import PopularTopics from '../../components/PopularTopics';
import {COLORS, colors} from '../../constants/theme';
import {FAB, useTheme} from 'react-native-paper';
import CustomMaterialMenu from '../../components/CustomMaterialMenu';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/userSlice';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CameraModal from '../../components/CameraModal';
const HomeScreen = ({navigation, route}) => {



  const theme=useTheme()
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const user = useSelector(selectUser);
  // console.log('userrrrrrr',user)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const getUser = useCallback(async () => {
    // console.log('getting data')
    await firestore()
      .collection('Users')
      .doc(route.params ? route.params.userId : user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
          setLoading(false);
        }
      });
  });
  const openModal = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    // console.log('getting user')
    if (user) getUser();
    setLoading(false);
  }, [user, isFocused]);

  useLayoutEffect(() => {
    // console.log('me first');
    navigation.setOptions({
      headerRight: () => (
        <CustomMaterialMenu
          menuText="Menu"
          textStyle={{color: 'white'}}
          navigation={navigation}
          route={route}
          isIcon={true}
        />
      ),
      headerLeft: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <TouchableOpacity
            style={{paddingHorizontal: 10, marginTop: 5}}
            onPress={() => {
              navigation.navigate('ProfileStack');
            }}>
            {userData?.userImg ? (
              <Avatar.Image
                source={{
                  uri: userData.userImg,
                }}
                size={30}
              />
            ) : (
              <View
                style={{
                  backgroundColor: 'lightgrey',
                  width: 30,
                  height: 30,
                  borderRadius: 999,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome6 name={'user'} color={'black'} size={20} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      ),
    });
  }, [userData]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={COLORS.primary} size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <ScreenHeader mainTitle="welcome to blightbusters" secondTitle="Getting started" />  */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenHeader />
        <SectionHeader
          title="Getting started"
          // buttonTitle="See All"
          onPress={() => {}}
        />
        <GetStarted list={TOP_PLACES} navigation={navigation} />
        <SectionHeader
          title="Popular topics"
          // buttonTitle="See All"
          // onPress={() => {}}
        />
        <PopularTopics list={PLACES} navigation={navigation} />
      </ScrollView>
      <CameraModal isVisible={isModalVisible} onClose={onModalClose} />
      <FAB icon="leaf" style={styles.fab} onPress={() => openModal()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 3,
    // backgroundColor:COLORS.white
  },
});

export default HomeScreen;
