import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, SIZES} from '../../constants/theme';

import BackButton from '../../components/BackButton';
const InfoScreen3 = ({navigation}) => {
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
          <Text style={styles.mainTitle}>
            How BlighBusters detects potato blight disease
          </Text>
          <BackButton navigation={navigation} />

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
          <Text style={styles.title}>Overview</Text>

          <Text style={styles.paragraph}>
            • BlightBusters utilizes machine learning techniques to accurately
            detect blight disease in potato plants. {'\n'}• The program gets
            pictures (represented as numbers) of plant leaves or parts and goes
            through different steps to understand if the disease is present or
            not.{'\n'}
            Here's a simple breakdown:{'\n'}{' '}
            <Text
              style={{
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
                color: COLORS.orange,
              }}>
              1.Getting the Picture Ready:
            </Text>
            {'\n'} • The program receives pictures (numbers representing the
            colors in the image) of plant parts, probably leaves, and makes sure
            they're in the right format for analysis.{'\n'}
            <Text
              style={{
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
                color: COLORS.orange,
              }}>
              2.Seeing Patterns:
            </Text>
            {'\n'}• The program uses special mathematical operations (like
            adding, multiplying, and convolutions - which are like special
            filters) to look at the picture and find certain shapes or patterns
            that might indicate if the disease is there.{'\n'}
            <Text
              style={{
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
                color: COLORS.orange,
              }}>
              3.Comparing Information:
            </Text>
            {'\n'}• It compares different parts of the picture, like zooming in
            or looking closely at specific areas, to understand more about the
            disease.{'\n'}• It does this by breaking the picture down into
            smaller pieces and analyzing each piece carefully.{'\n'}
            <Text
              style={{
                fontSize: SIZES.h3,
                fontFamily: 'OpenSans-Medium',
                color: COLORS.orange,
              }}>
              4. Making a Decision:
            </Text>
            {'\n'} • Based on all this analyzing, the program finally decides if
            the plant has the early or late blight disease or not.{'\n'}• So,
            this model is like a detective with a special way of looking at
            pictures of plants.{'\n'} • It checks these pictures step-by-step to
            decide if the plant has the disease or not, helping farmers know if
            their plants need special care or treatment.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    padding: 10,
    color: COLORS.black,
    fontSize: SIZES.h2,
    fontFamily: 'OpenSans-SemiBold',
  },
  mainTitle: {
    position: 'absolute',
    zIndex: 6,
    bottom: 40,
    left: 10,
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontFamily: 'OpenSans-Bold',
  },
  paragraph: {
    padding: 10,
    color: COLORS.primary,
    fontSize: SIZES.h4,
    fontFamily: 'OpenSans-Regular',
  },
  innerTitle: {
    padding: 10,
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: SIZES.h4,
    fontFamily: 'OpenSans-Regular',
  },
  image: {
    width: SIZES.width - 20,
    height: SIZES.height / 3,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  topacity: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SIZES.width / 3,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen3;
