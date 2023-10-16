import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useSelector} from 'react-redux';
import {COLORS, SIZES} from '../constants/theme';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  const user = useSelector(state => state.userss.user);
  // console.log('userrrrrrrr', user);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: COLORS.white, paddingTop: 0}}>
        <View
          style={{
            padding: 20,
            height: SIZES.xxLarge + 100,
            backgroundColor: COLORS.gray2,
            // position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/129.png')}
            style={{
              //   position: 'absolute',
              //   top: 0,
              //   bottom: 0,
              height: 80,
              width: 80,
              backgroundColor: COLORS.black,
              borderRadius: 999,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {user?.email}
          </Text>
        </View>
        {/* <ImageBackground
          source={require('../assets/images/131.png')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/129.png')}
            style={{
              height: 80,
              width: 80,
              backgroundColor: COLORS.black,
              borderRadius: 999,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
        </ImageBackground> */}

        {/* Drawer tabs */}
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>

        {/* EXTRAS */}
        <View
          style={{
            padding: 20,
            borderTopWidth: 0.6,
            marginTop: 60,
            borderTopColor: COLORS.black,
          }}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="share-social" size={22} color={COLORS.black} />
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 15,
                }}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              try {
                await auth().signOut();
              } catch (e) {
                console.log('error signing out', e);
              }
            }}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="exit" size={22} color={COLORS.black} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 15,
                  color: COLORS.black,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
