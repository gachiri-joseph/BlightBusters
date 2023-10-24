import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,Button
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';
const ios = Platform.OS == 'ios';
// const topMargin = ios? '': 'mt-10';

export default function PlantDetailScreen() {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* destination image */}
      <Image
        source={require('../../assets/images/temple.jpg')}
        style={{width: wp(100), height: hp(45)}}
      />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          width: SIZES.width,
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: COLORS.gray2,
            borderRadius: 999,
            marginLeft: 4,
            padding: 2,
          }}>
          <Ionicons name="chevron-back" color={COLORS.black} size={30} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* descritpion  */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          backgroundColor: COLORS.white,
          paddingTop: 8,
          paddingHorizontal: 5,
          marginTop: -SIZES.large,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding:20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: wp(7),
                fontWeight: 'bold',
                // flex: 1,
                marginRight:wp(7),
                color:  COLORS.primary,
              }}>
              Accuracy:
            </Text>
            <Text
              style={{
                fontSize: wp(7),
                color: COLORS.black,
                fontWeight: 'bold',
              }}>
              84 %
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                width:wp(30),
                fontSize: wp(7),
                fontWeight: 'bold',
                // flex: 1,
                marginVertical:5,
                color: COLORS.primary,
              }}>
              Diagnosis
            </Text>
            <Text style={{fontSize: wp(4),color:COLORS.black}}>For accurate diagnosis and
             tailored management strategies, it's advisable to consult with a local agricultural 
             extension service or a plant pathology expert. They can provide specific recommendations based 
            on the particular strain of the pathogen in your region.</Text>
          </View>
       <FormButton title={"Open Modal"}     onPress={() => navigation.navigate('MyModal')}/>
          <FormButton title={'Check recommendation'} onPress={()=>{}}/>
        </ScrollView>
      </View>
    </View>
  );
}
