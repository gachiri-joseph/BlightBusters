import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NetContext} from '../../context/NetProvider';
import AlertModal from '../../components/AlertModal';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoScreen2 = ({navigation}) => {
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
            Blight disease in potatoes
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
            source={require('../../assets/images/pic1.jpg')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            Potato diseases
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
            Potato diseases are caused by fungi, viruses and bacteria. The
            tables below give the summary of types, the causal agents, symptoms,
            mode of transmission and recommended IMP management measures. The
            major fungal diseases affecting potato include potato late blight,
            potato early blight, black scurf/stem canker and fusarium dry rot.
            The major bacterial diseases include bacterial wilt and blackleg or
            soft rot. The major viral diseases for potato include Potato virus Y
            (PVY), Potato leaf roll virus (PLRV), Potato Virus X (PVX), Potato
            virus S (PVS) and Potato virus A (PVA).
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            Potato blight disease
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
            The diseases causing substantial yield loss in potato are
            Phytophthora infestans (late blight) and Alternaria solani (early
            blight). Late blight of Potatoes, is the most serious fungal disease
            of potatoes in Kenya (KARI). The disease first appears as
            water-soaked spots on the leaves and is prevalent in crops during
            prolonged conditions of wetness or high humidity. The disease
            spreads fast aided by wind or rain and can cause complete crop loss
            if not managed. These spots enlarge rapidly and turn brown. The
            spots can also occur on the tips of the stems which turn black and
            die off. On the underside of the leaf, the fungus produces a white
            moldy mass. Early blight like other leaf diseases, typically targets
            less productive and older foliage first, followed by steady movement
            upwards in the plant canopy causing leave senescence. Visible
            symptoms of this disease include small 1–2 mm black or brown
            lesions, at early stages, turning into dark pigmented concentric
            rings under conducive environmental conditions, at mature stages of
            the disease.
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            Favorable Environment Conditions for Late Blight
          </Text>
          <Text
            style={{
              padding: 10,
              // textAlign: 'center',
              color: COLORS.primary,
              fontSize: SIZES.h4,
              fontFamily: 'OpenSans-Regular',
            }}>
            Late blight pathogens develop rapidly under moderate temperatures of
            between 15-24 degrees celsius, and minimum night temperatures of
            more than 10 degrees celsius. Free moisture must be present on the
            plant in order for the sporangia to germinate and infect a new
            plant. Relative humidity needs to be greater than 90% for
            sporulation (sporangia) to develop. For infection to take place,
            cool and cloudy days are required to keep evapotranspiration low
            coupled with frequent rainfall In summary for any plant disease to
            occur three factors must be present and conducive for the plant i.e.
            there must be a susceptible host (e.g. potato plant), a conducive
            environment and a pathogen must be present. These three elements,
            pathogen, host, and environmental conditions, make up the disease
            triangle .
          </Text>
        </View>
        <Image
          style={{
            width: SIZES.width - 20,
            height: SIZES.height / 3,
            resizeMode: 'contain',
            marginHorizontal: 10,
            // backgroundColor:'pink'
          }}
          source={require('../../assets/images/foliar_late_blight_02.png')}
        />
        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.primary,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
          Hole in potato canopy
        </Text>
        <Image
          style={{
            width: SIZES.width - 20,
            height: SIZES.height / 3,
            resizeMode: 'contain',
            marginHorizontal: 10,
            marginVertical: 5,
          }}
          source={require('../../assets/images/foliar_late_blight03.png')}
        />
        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.primary,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
          {' '}
          Typical late blight lesions on a petiole
        </Text>
        <Image
          style={{
            width: SIZES.width - 20,
            height: SIZES.height / 3,
            resizeMode: 'contain',
            margin: 10,
          }}
          source={require('../../assets/images/stem_late_blight.png')}
        />
        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.primary,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
        Sporulation on a stem
        </Text>
        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.orange,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
        images courtesy of Idaho Crop Alerts Network. Wharton, University of Idaho
        </Text>
      </View>
    </ScrollView>
  );
};

export default InfoScreen2;
