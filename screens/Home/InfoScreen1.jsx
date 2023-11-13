import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NetContext} from '../../context/NetProvider';
import AlertModal from '../../components/AlertModal';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoScreen1 = ({navigation}) => {
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
        alignItems: 'center',
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
              left: 10,
              color: COLORS.white,
              fontSize: SIZES.h2,
              fontFamily: 'OpenSans-Bold',
            }}>
            All about potatoes grown in Kenya
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
            source={require('../../assets/images/pic4.jpg')}
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
            Background
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
            Potato (Solanum tuberosum L) is one of the key staple crops in Kenya
            and the second most important crop in the country after maize. The
            potato value chain employs over 3.5 million actors, contributing
            over 50 billion Kenyan shillings to the economy with a potential to
            contribute over 200 billion Kenyan shillings (National Potato
            council of Kenya).The crop has been identified as a priority crop in
            Kenya with several County governments having classified potato as a
            key food that has the potential to enhance food security and drive
            economic growth in Kenya, with more than major 13 producing
            counties. Nationally, per capita consumption is estimated at 29.4
            kilograms as of 2020 (Food and Agriculture Organization), with more
            than 800,000 farmers on 160,000 hectares.
          </Text>
        </View>

        <Image
          style={{
            width: SIZES.width - 20,
            height: SIZES.height / 2,
            resizeMode: 'cover',
            marginVertical: 10,
          }}
          source={require('../../assets/images/Potato-growing-counties-in-Kenya-MoALF-2016.png')}
        />
        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.primary,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
          Potato growing counties in Kenya (MoALF, 2016) 
        </Text>

        <View>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            Production and uses
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
            The crop is widely consumed in different forms. It is estimated that
            about 9 percent of the total potato produced in Kenya goes into
            processing. 5 percent of the potato that goes into processing is
            processed into French fries commonly referred to as chips, 3 percent
            goes into processing of crisps, while 1 percent goes into processing
            of various forms of snacks . Potatoes are used in culinary of
            alcoholic beverages and as a food for domestic animals. Potatoes are
            also used in the industrial world to manufacture food-thickening
            ingredients and sauce adhesives, in the textile industry, they are
            used to manufacture boards and papers. Furthermore, their stems and
            peelings are used by animal feed manufacturers to create a
            nutritious blend of affordable animal feeds. Lastly, potato is sed
            in the production of biogas, contributing to a greener Kenya and
            Earth.
          </Text>
        </View>

        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.orange,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
          image courtesy of Climatic Change, Its Likely Impact on Potato (
          Solanum tuberosum L.) Production in Kenya and Plausible Coping
          Measures - Scientific Figure on ResearchGate
        </Text>
      </View>
    </ScrollView>
  );
};

export default InfoScreen1;
