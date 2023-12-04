import {Image, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormButton from './FormButton';
import {FAB} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
const InnerModal = ({isVisible, onCloseAll, label, result, imagePath}) => {
  const navigation = useNavigation();
  console.log('Failed to predict', label);

  let text;
  switch (label) {
    case 'potato_early_blight': {
      text = 'Early blight';
      break;
    }

    case 'potato_late_blight': {
      text = 'Late blight';
      break;
    }

    default:
      text = 'Not a potato plant';
  }
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => onCloseAll()}>
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 28,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          flex: 1,
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: SIZES.h1,
            fontFamily: 'OpenSans-Bold',
            marginBottom: 28,
          }}>
          Your results
        </Text>
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
              source={{uri: imagePath}}
              style={{width: 140, height: 140, borderRadius: 999}}
            />
          </View>

          <Text
            style={{
              color: `${
                label === 'potato_healthy' ? COLORS.primary : COLORS.red
              }`,
              fontSize: SIZES.h2,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            {label === 'potato_healthy'
              ? 'No blight detected 😎 '
              : label === 'Not_Disease'
              ? 'Not a potato plant'
              : `${text} detected`}
          </Text>
        </View>
        {/* destination image */}

        {label === 'Not_Disease' || label === 'potato_healthy' ? (
          <View style={{marginVertical: wp(30)}}>
            <Text
              style={{
                color: 'black',
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
              }}>
              {label === 'potato_healthy' ? (
                '  Everything looks good 👍 '
              ) : label === 'Not_Disease' ? (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: SIZES.h4,
                      fontFamily: 'OpenSans-Medium',
                    }}>
                    Image uploaded is not a potato plant !!
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: SIZES.h4,
                      fontFamily: 'OpenSans-Medium',
                    }}>
                    please upload another image and try again
                  </Text>
                </View>
              ) : (
                ``
              )}
            </Text>
          </View>
        ) : (
          <>
            {/* descritpion  */}
            <ScrollView
              contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                // flex: 1,
                paddingTop: 10,
                paddingBottom: 70,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 10,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                elevation: 1, //only on android
                width: SIZES.width,
                backgroundColor:'rgba(1,1,1,0.03)'
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  width: wp(90),
                  fontSize: SIZES.h3,
                  fontFamily: 'OpenSans-Bold',
                  // flex: 1,
                  marginVertical: 5,
                  color: COLORS.primary,
                }}>
                Recommendations for {text}
              </Text>
              <Text
                style={{
                  width: wp(90),
                  fontSize: SIZES.h3,
                  fontFamily: 'OpenSans-SemiBold',
                  // flex: 1,
                  marginVertical: 5,
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight'
                  ? ' Prevention  '
                  : label === 'potato_late_blight'
                  ? ' Prevention and control'
                  : ``}
              </Text>

              <Text
                style={{
                  fontSize: SIZES.h4,
                  fontFamily: 'OpenSans-Regular',
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight' ? (
                  <Text>
                    {' '}
                    • Plant certified potato tubers from KALRO or ADC. {'\n'}•
                    Rotate with non-solanaceous crops such as maize, beans and
                    peas for at least two seasons.{'\n'}• Destroy infected crop
                    debris after harvesting.{'\n'}• Keep field weed free to
                    reduce inoculum pressure. {'\n'}• Maintain optimal soil
                    fertility to increase crop vigour.{'\n'}• Observe spacing of
                    70cm x 30cm to optimize aeration.
                  </Text>
                ) : label === 'potato_late_blight' ? (
                  <Text>
                    • Use of healthy potato tuber at planting.{'\n'} • Use
                    varieties with high late blight resistance.
                    {'\n'}• Cover the tubers always during hilling to prevent
                    tuber infection.{'\n'}• Destroy leaves that are infected to
                    prevent tubers coming into contact with the spores before
                    harvesting.{'\n'}• Harvest the tubers when they are fully
                    mature to avoid incidences of skin damages and spores entry
                    during harvesting and storage.
                    {'\n'}• Lastly, use approved chemicals with fungicides after
                    emergence and repeat regularly based on the prevailing
                    weather conditions.
                  </Text>
                ) : (
                  ``
                )}
              </Text>

              <Text
                style={{
                  width: wp(90),
                  fontSize: SIZES.h3,
                  fontFamily: 'OpenSans-SemiBold',
                  // flex: 1,
                  marginVertical: 5,
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight'
                  ? 'Monitoring '
                  : label === 'potato_late_blight'
                  ? ' '
                  : ``}
              </Text>

              <Text
                style={{
                  fontSize: SIZES.h4,
                  fontFamily: 'OpenSans-Regular',
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight' ? (
                  <Text>
                    • Additional relevant crops: tomato, eggplant, pepper, black
                    nightshade.{'\n'} Look out for:{'\n'} • Brown spots with
                    concentric rings on leaves appearing first on older leaves
                    and progressing upwards.{'\n'} • Slightly sunken, circular
                    or irregular surface lesions on tubers that are darker than
                    adjacent healthy tissue.{'\n'}• Tubers with internal brown
                    to black corky rot.{'\n'} • Take action when 5% of plants
                    are affected in 100 plants.
                  </Text>
                ) : label === 'potato_early_blight' ? (
                  ' '
                ) : (
                  ``
                )}
              </Text>

              <Text
                style={{
                  width: wp(90),
                  fontSize: SIZES.h3,
                  fontFamily: 'OpenSans-SemiBold',
                  marginVertical: 5,
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight'
                  ? 'Direct control'
                  : label === 'potato_late_blight'
                  ? ' '
                  : ``}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h4,
                  fontFamily: 'OpenSans-Regular',
                  color: COLORS.black,
                }}>
                {label === 'potato_early_blight' ? (
                  <Text>• Uproot severely infected plants and burn.</Text>
                ) : label === 'potato_late_blight' ? (
                  ' '
                ) : (
                  ``
                )}
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  width: wp(90),
                  fontSize: SIZES.h5,
                  fontFamily: 'OpenSans-SemiBold',
                  // flex: 1,
                  marginVertical: 5,
                  color: COLORS.orange,
                }}>
                {label === 'potato_early_blight'
                  ? 'information courtesy of https://cabidigitallibrary.org/'
                  : label === 'potato_late_blight'
                  ? 'information courtesy of National Potato Council of Kenya'
                  : ``}
              </Text>
              {/* </View> */}
            </ScrollView>
          </>
        )}
      </View>
      <View>
        <FAB
          icon="home"
          color={COLORS.primary}
          style={{
            position: 'absolute',
            right: wp(43),
            marginTop: 5,
            bottom: 10,
            elevation: 3,
            
          }}
          onPress={onCloseAll}
        />
      </View>
    </Modal>
  );
};

export default InnerModal;

const styles = StyleSheet.create({});
