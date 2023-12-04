import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
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

          <TouchableOpacity key={index}style={styles.cardContainer} activeOpacity={0.7}  onPress={() => {
                  if (item.id === 1) {
                    navigation.navigate('InfoScreen1');
                  } else if (item.id === 2) {
                    navigation.navigate('InfoScreen2');
                  } else {
                    navigation.navigate('InfoScreen3');
                  }
               
                }}>
          <ImageBackground 
            source={item.image}
            imageStyle={styles.image}
            style={[styles.card, shadow.light]} 
            key={item.id}>
         
         
            <View style={styles.footer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
           
            </View>
          </ImageBackground>
        </TouchableOpacity>
        );
      }}
    />
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
    position:'relative',
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
    resizeMode: 'cover',
    borderRadius:20
  },
  footer: {
    position:'absolute',
    bottom:0,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:'rgba(0, 0, 0, 0.6)'
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.h3,
    paddingLeft:4,
    fontFamily:'OpenSans-Medium',
    color: colors.white,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },

});

export default GetStarted;
