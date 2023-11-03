import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';
const ios = Platform.OS == 'ios';
// const topMargin = ios? '': 'mt-10';

export default function ResultsDetectedScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'column',
        paddingTop: 28,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Text
        style={{color: COLORS.black, fontSize: SIZES.large, marginBottom: 28}}>
        Your results
      </Text>
      {/* destination image */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          height: SIZES.height / 3,
          // backgroundColor: 'pink',
        }}>
        <View>
          <Image
            source={require('../../assets/images/temple.jpg')}
            style={{width: 140, height: 140, borderRadius: 999}}
          />
        </View>
        <Text style={{color: COLORS.red, fontSize: SIZES.large}}>
          EARLY BLIGHT DETECTED
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          width: SIZES.width,
          top: 28,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: COLORS.gray2,
            borderRadius: 999,
            marginLeft: 4,
            padding: 2,
          }}>
          <Ionicons name="chevron-back" color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View>

      {/* descritpion  */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
       
          paddingTop: 8,
          paddingHorizontal: 5,
       
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
     elevation:1,
          // borderTopColor:COLORS.black,
          // borderTopWidth:4,
          width:SIZES.width
        }}>
      
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
                marginRight: wp(7),
                color: COLORS.primary,
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
                width: wp(30),
                fontSize: wp(7),
                fontWeight: 'bold',
                // flex: 1,
                marginVertical: 5,
                color: COLORS.primary,
              }}>
              Diagnosis
            </Text>
            <Text style={{fontSize: wp(4), color: COLORS.black}}>
              For accurate diagnosis and tailored management strategies, it's
              advisable to consult with a local agricultural extension service
              or a plant pathology expert. They can provide specific
              recommendations based on the particular strain of the pathogen in
              your region.
            </Text>
          </View>

          <FormButton title={'Check recommendation'} onPress={() => {}} />
        
      </View>
    </View>
  );
}
