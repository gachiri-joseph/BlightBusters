import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NetContext} from '../../context/NetProvider';
import AlertModal from '../../components/AlertModal';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoScreen3 = ({navigation}) => {
  const {offline} = useContext(NetContext);

  if (offline) {
    return <AlertModal offline={offline} navigation={navigation} />;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',flex:1
      }}>
      <View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: SIZES.width,
            height: SIZES.height / 3,

            backgroundColor: 'pink',
          }}>
          <Text
            style={{
              position: 'absolute',
              zIndex: 6,
              bottom: 40,

              color: COLORS.white,
              fontSize: SIZES.h2,
              fontFamily: 'OpenSans-Bold',
            }}>
            How BlighBusters detects potato blight disease
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
              left: 10,
              zIndex: 6,
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 999,
            }}>
            <Ionicons name="arrow-back" color={COLORS.white} size={35} />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/smart-digital-agriculture-technology-futuristic-sensor-data-collection-management-artificial-intelligence-to-control-quality-205888734.webp')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            Overview
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
             BlightBusters utilizes machine learning techniques to accurately
            detect potato blight disease and provide solutions to farmers.
          </Text>
        </View>

        {/* <Image
          style={{
            width: SIZES.width - 20,
            height: SIZES.height / 2,
            resizeMode: 'cover',
            marginVertical: 10,
          }}
          source={require('../../assets/images/Potato-growing-counties-in-Kenya-MoALF-2016.png')}
        /> */}
       
      </View>
    </ScrollView>
  );
};

export default InfoScreen3;
