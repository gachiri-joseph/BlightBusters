import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, shadow, sizes, SPACING} from '../constants/theme';

const CARD_WIDTH = sizes.width / 2 - (SPACING.l + SPACING.l / 2);
const CARD_HEIGHT = 220;

const PopularTopics = ({list,navigation}) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity key={index}style={styles.cardContainer} onPress={()=>navigation.navigate('Topics')}>
            <View style={[styles.card, shadow.light]} key={item.id}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
             
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: SPACING.l,
    marginBottom: SPACING.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.h4,
    fontFamily:'OpenSans-Medium',
    color: colors.primary,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default PopularTopics;
