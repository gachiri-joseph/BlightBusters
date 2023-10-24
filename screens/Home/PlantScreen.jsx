import {View, Text, Button, ImageBackground} from 'react-native';
import React from 'react';
import PlantCard from '../../components/PlantCard';
import { COLORS } from '../../constants/theme';

const PlantScreen = ({navigation}) => {
  return (
    <View style={{padding:10,flex:1,backgroundColor:'#f5f5f5'}}>
      {/* <ImageBackground style={{flex:1}}source={require('../../assets/images/129.png')}> */}
        {/* <Button title="next" onPress={() => {}} /> */}
        <PlantCard navigation={navigation}/>
      {/* </ImageBackground> */}
    </View>
  );
};

export default PlantScreen;
