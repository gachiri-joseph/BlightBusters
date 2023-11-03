import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {sizes, colors, shadow, SPACING} from '../constants/theme';


const CARD_WIDTH = sizes.width - 70;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + SPACING.l;

const GetStarted = ({list, navigation}) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: SPACING.l,
              marginRight: index === list.length - 1 ? SPACING.l : 0,
            }}
            onPress={() => {
              if (item.id === 1) {
                navigation.navigate('InfoScreen1');
              } else if (item.id === 2) {
                navigation.navigate('InfoScreen2');
              } else {
                navigation.navigate('InfoScreen3');
              }

            
            }}>
            <View style={[styles.card, shadow.dark]}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  // favorite: {
  //   position: 'absolute',
  //   top: SPACING.m,
  //   right: SPACING.m,
  //   zIndex: 1,
  // },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
});

export default GetStarted;
