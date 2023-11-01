import {StyleSheet, Text, View, Image} from 'react-native';
import React ,{useState,useEffect}from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, colors, sizes} from '../constants/theme';
import {Avatar, Title} from 'react-native-paper';
import CustomMaterialMenu from './CustomMaterialMenu';
import { SPACING } from '../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';
import firestore from '@react-native-firebase/firestore';
const DrawerHeader = ({navigation,route}) => {
  const {Container,Title} = DrawerHeaderStyles;
  const insets = useSafeAreaInsets();
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const User = useSelector(selectUser);

  // console.log('userww', user);
  const getUser = async () => {
    await firestore()
      .collection('Users')
      .doc(route.params ? route.params.userId : user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
      // this will make sure you only set id when userId
      // is a valid value, and it won't reset it every
      // serenader
      if(User !==null && user !== User)
      setUser(User);

   if (user !== null)
    getUser();
  }, [user,User]);


  return (
    <SafeAreaView>
      <View style={[Container, {marginTop: insets.top,height:56}]}>
         <View style={{flexDirection: 'row', marginRight: 10}}>
         
            <TouchableOpacity
              style={{paddingHorizontal: 10, marginTop: 5}}
              onPress={() => {
              navigation.navigate('ProfileStack');
              }}>
              <Avatar.Image
                 source={{uri: userData ? userData.userImg :'https://images.unsplash.com/photo-1698694326956-026c3f4c986b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'}}
                size={30}
              />
            </TouchableOpacity>
         
        </View>

        <View>
          <Text style={Title}>BlightBusters</Text>
        </View>

        <CustomMaterialMenu
              menuText="Menu"
              textStyle={{color: 'white'}}
              navigation={navigation}
              route={route}
              isIcon={true}
            />

       
       
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;

const DrawerHeaderStyles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.l,
    backgroundColor:COLORS.white
  },
  Title: {
    color:colors.black,
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  Profile: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'black',
  },
});
