import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormButton from './FormButton';
import {FAB} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, SIZES} from '../constants/theme';
const InnerModal = ({isVisible, onCloseAll, label, result}) => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => clearOutput()}>
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
          style={{
            color: COLORS.black,
            fontSize: SIZES.large,
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
              source={require('../assets/images/temple.jpg')}
              style={{width: 140, height: 140, borderRadius: 999}}
            />
          </View>
          <Text
            style={{
              color: `${label === 'Healthy' ? COLORS.primary : COLORS.red}`,
              fontSize: SIZES.large + 5,
            }}>
            {label === 'Healthy'?'No Blight':label } Detected
          </Text>
        </View>
        {/* destination image */}
        {label === 'Healthy' ? (
          <View>
            <Text style={{color: 'black', fontSize: SIZES.large }}>Everything looks good</Text>
          </View>
        ) : (
          <>
            {/* descritpion  */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 8,
                paddingHorizontal: 5,

                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                elevation: 1,
                // borderTopColor:COLORS.black,
                // borderTopWidth:4,
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
                    fontSize: wp(7),
                    fontWeight: 'bold',
                    // flex: 1,
                    marginVertical: 5,
                    color: COLORS.primary,
                  }}>
                  Diagnosis
                </Text>
                <Text style={{fontSize: wp(4), color: COLORS.black}}>
                  For accurate diagnosis and tailored management strategies,
                  it's advisable to consult with a local agricultural extension
                  service or a plant pathology expert. They can provide specific
                  recommendations based on the particular strain of the pathogen
                  in your region.
                </Text>
              </View>

              <FormButton title={'Check recommendation'} onPress={() => {}} />
              {/* <FormButton title={'Home'} onPress={onCloseAll} /> */}
            </View>
          </>
        )}

        <View>
          <FAB
            icon="home"
            style={{
              // position: 'absolute',
              // margin: 16,
              // right: 0,
              // bottom: 0,
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
      </View>
    </Modal>
  );
};

export default InnerModal;

const styles = StyleSheet.create({});
