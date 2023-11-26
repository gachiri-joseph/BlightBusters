import {Image, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormButton from './FormButton';
import {FAB} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, SIZES} from '../constants/theme';
const InnerModal = ({isVisible, onCloseAll, label, result, imagePath}) => {
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
              color: `${label === 'Healthy' ? COLORS.primary : COLORS.red}`,
              fontSize: SIZES.h2,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            {label === 'Healthy'
              ? 'No Blight Detected 😎 '
              : `${label} Detected`}
          </Text>
        </View>
        {/* destination image */}
        {label === 'Healthy' ? (
          <View style={{marginVertical: wp(30)}}>
            <Text
              style={{
                color: 'black',
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
              }}>
              Everything looks good 👍
            </Text>
          </View>
        ) : (
          <>
            {/* descritpion  */}
            <ScrollView
              contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: 10,
                // borderTopColor: COLORS.gray,
                // borderWidth: 1,
                // borderColor: COLORS.gray,
                // borderTopRadius: 20,
                // borderBottomColor: 'white',
                // borderTopLeftColor: 'white',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                elevation: 1, //only on android
                width: SIZES.width,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    fontFamily: 'OpenSans-SemiBold',
                    // flex: 1,
                    marginRight: wp(7),
                    color: COLORS.primary,
                  }}>
                  Accuracy:
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    fontFamily: 'OpenSans-SemiBold',
                    color: COLORS.black,
                  }}>
                  {result}
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
                    fontSize: SIZES.h3,
                    fontFamily: 'OpenSans-SemiBold',
                    // flex: 1,
                    marginVertical: 5,
                    color: COLORS.primary,
                  }}>
                  Diagnosis
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    fontFamily: 'OpenSans-Regular',
                    color: COLORS.black,
                  }}>
                  For accurate diagnosis and tailored management strategies,
                  it's advisable to consult with a local agricultural extension
                  service or a plant pathology expert. They can provide specific
                  recommendations based on the particular strain of the pathogen
                  in your region.
                </Text>
              </View>
              <View
                style={{
                  marginBottom: SIZES.h4,width:'100%'
                }}>
                <FormButton title={'Check recommendation'} onPress={() => {}} />
                {/* <FormButton title={'Home'} onPress={onCloseAll} /> */}
              </View>
            </ScrollView>
          </>
        )}
      </View>
      <View>
        <FAB
          icon="home"
          style={{
            position: 'absolute',
            right: wp(43),
            marginTop: 5,
            bottom: 10,
            elevation: 3,
            // backgroundColor:COLORS.white
          }}
          onPress={onCloseAll}
        />
        {/* <MaterialCommunityIcons
            name="home"
            size={34}
            color={COLORS.primary}
          /> */}
      </View>
    </Modal>
  );
};

export default InnerModal;

const styles = StyleSheet.create({});
