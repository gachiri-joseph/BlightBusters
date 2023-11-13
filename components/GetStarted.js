import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  sizes,
  colors,
  shadow,
  SPACING,
  SIZES,
  COLORS,
} from '../constants/theme';

const CARD_WIDTH = SIZES.width - 70;
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
          <TouchableOpacity activeOpacity={0.95}
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
              // https://icons8.com"
            }}>
            <View style={[styles.card, shadow.dark]}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    elevation: 1,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: '#F7F7F7',
    paddingRight:5
  },
  image: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
    resizeMode: 'cover',
  },
  titleBox: {
    width:'80%',
    left: 16,
  },
  title: {
    fontSize: sizes.h3,
    fontFamily: 'OpenSans-Medium',
    color: colors.black,
  },
});

export default GetStarted;
