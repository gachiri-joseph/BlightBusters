import React ,{useState}from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { PLACES, TOP_PLACES } from '../../assets/data';
import ScreenHeader from '../../components/ScreenHeader';
import TopPlacesCarousel from '../../components/TopPlacesCarousel';
import SectionHeader from '../../components/SectionHeader';
import TripsList from '../../components/TripsList';
import { COLORS, colors } from '../../constants/theme';
import { FAB } from 'react-native-paper';
import CameraModalScreen from './CameraModalScreen';

const HomeScreen = ({navigation}) => {

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };
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
      {/* <CameraModalScreen isVisible={isModalVisible} onClose={onModalClose}  /> */}
      <FAB
    icon="leaf"
    style={styles.fab}
    onPress={() => navigation.navigate('Camera')}
  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation:3,
    // backgroundColor:COLORS.white
  },
});

export default HomeScreen;