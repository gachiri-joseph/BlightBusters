import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, colors, sizes} from '../constants/theme';
import {Avatar, Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomMaterialMenu from './CustomMaterialMenu';
import { SPACING } from '../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const DrawerHeader = ({navigation,route}) => {
  const {Container,Title} = DrawerHeaderStyles;
  const insets = useSafeAreaInsets();
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
                source={require('../assets/images/131.png')}
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
