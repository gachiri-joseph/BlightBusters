import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import * as Progress from 'react-native-progress';
import LoadingDots from 'react-native-loading-dots';
const LoadingAnalysisScreen = ({navigation}) => {
  useEffect(()=>{

      setTimeout(()=>{
          console.log('done')
          navigation.replace('resultsStack')

      },2000)
  },[])
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingVertical: SIZES.height / 4,
      }}>
      <View
        style={{
          height: SIZES.height / 5,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          // backgroundColor:'pink'
        }}>
        <View
          style={{
            width: 50,
          }}>
          {/* <LoadingDots
            dots={3}
            bouncingHeight={4}
            size={SIZES.small}
            colors={['#089000', '#0a5d00', '#063b00']}
          /> */}
        </View>

        <Progress.Bar
          progress={0.3}
          width={200}
          color={COLORS.primary}
          useNativeDriver={false}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: SIZES.large,
            fontWeight: 'bold',
          }}>
          ANALYZING IMAGE
        </Text>
      </View>
      <View style={{}}>
        <Text style={{color: COLORS.black}}>
          Please be patient,this might take a minute.
        </Text>
      </View>
    </View>
  );
};

export default LoadingAnalysisScreen;
