import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { PLACES, TOP_PLACES } from '../../assets/data';
import MainHeader from '../../components/MainHeader';
import ScreenHeader from '../../components/ScreenHeader';
import TopPlacesCarousel from '../../components/TopPlacesCarousel';
import SectionHeader from '../../components/SectionHeader';
import TripsList from '../../components/TripsList';
import { colors } from '../../constants/theme';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <ScreenHeader mainTitle="welcome to blightbusters" secondTitle="Getting started" />  */}
    
      <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenHeader  /> 
      <SectionHeader
          title="Getting started"
          // buttonTitle="See All"
          onPress={() => {}}
        />
        <TopPlacesCarousel list={TOP_PLACES} navigation={navigation}/>
        <SectionHeader
          title="Popular topics"
          // buttonTitle="See All"
          // onPress={() => {}}
        />
        <TripsList list={PLACES} navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;