import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SIZES} from '../constants/theme';

const DrawerHeader = ({navigation}) => {
  const {Profile, Container} = DrawerHeaderStyles;
  return (
    <SafeAreaView>
      <View style={Container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name={'menu'} size={20} color={'black'} />
        </TouchableOpacity>

        <View>
          <Text style={{color: 'black'}}>BlightBusters</Text>
        </View>
        <View>
          <View style={Profile} />
          {/* <Image source={require('../assets/images/129.png')} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;

const DrawerHeaderStyles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.xSmall,
    backgroundColor: 'white',
  },
  Profile: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'black',
  },
});
