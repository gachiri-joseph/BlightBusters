import React, {useState, useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {PLACES, TOP_PLACES} from '../../assets/data';
import ScreenHeader from '../../components/ScreenHeader';
import TopPlacesCarousel from '../../components/TopPlacesCarousel';
import SectionHeader from '../../components/SectionHeader';
import TripsList from '../../components/TripsList';
import {COLORS, colors} from '../../constants/theme';
import {FAB} from 'react-native-paper';
import CustomMaterialMenu from '../../components/CustomMaterialMenu';
import {Avatar, Title} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/userSlice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({navigation, route}) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };
  const [userData, setUserData] = useState(null);
  // const [user, setUser] = useState(null);
  const user = useSelector(selectUser);
  // console.log(user)
  const getUser = async user => {
    await firestore()
      .collection('Users')
      .doc(route.params ? route.params.userId : user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useLayoutEffect(() => {
    console.log('me first');
    // auth().onAuthStateChanged(user => {
    //   if (user) {
    //     getUser(user);
    //   } else {
    //     console.log('error');
    //   }
    // });

    // getUser()
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
            <Avatar.Image
              source={{
                uri: userData
                  ? userData.userImg
                  : 'https://images.unsplash.com/photo-1698694326956-026c3f4c986b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
              }}
              size={30}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
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
        <TopPlacesCarousel list={TOP_PLACES} navigation={navigation} />
        <SectionHeader
          title="Popular topics"
          // buttonTitle="See All"
          // onPress={() => {}}
        />
        <TripsList list={PLACES} navigation={navigation} />
      </ScrollView>
      {/* <CameraModalScreen isVisible={isModalVisible} onClose={onModalClose}  /> */}
      <FAB
        icon="leaf"
        style={styles.fab}
        onPress={() => navigation.navigate('Camera')}
      />
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
