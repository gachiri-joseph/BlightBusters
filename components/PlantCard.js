import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const PlantCard = ({navigation}) => {
  return (
    // <SafeAreaView>
         <TouchableOpacity activeOpacity={0.95} onPress={()=>{navigation.navigate('PlantDetails')}}>
      <View
        style={{
          width: '100%',
          height: hp(25),
          marginVertical: 10,
          backgroundColor: COLORS.white,
          elevation: 3,
          paddingHorizontal: 12,
          borderRadius: 10,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
           
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 10,
            marginTop: 5,
             borderBottomWidth:1,
             borderBottomColor: COLORS.gray2,
          }}>
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{width: wp(25), height: 100, borderRadius: 10}}
              source={require('../assets/images/129.png')}></Image>
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              paddingLeft: wp(10),
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.large,
                marginBottom: 5,
              }}>
              Boabab
            </Text>
            <Text style={{color: COLORS.gray, marginBottom: 5}}>
              Adansonia digitata
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{color: COLORS.gray}}>Plant added at 18 Jun 2023</Text>
          <AntDesign name="delete" color={COLORS.primary} size={20} />
        </View>
      </View>
        </TouchableOpacity>
    // </SafeAreaView>
  );
};

export default PlantCard;
