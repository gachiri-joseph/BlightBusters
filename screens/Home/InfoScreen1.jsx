import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NetContext} from '../../context/NetProvider';
import AlertModal from '../../components/AlertModal';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import BackButton from '../../components/BackButton';

const InfoScreen1 = ({navigation}) => {
  const {offline} = useContext(NetContext);
  const [readPar1, setReadPar1] = useState(false);
  const [readPar2, setReadPar2] = useState(false);
  const [info, setInfo] = useState('');
  const getInfo = async () => {
    try {
      const userDocument = await firestore()
        .collection('information')
        .doc('1')
        .get();
      setInfo(userDocument.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (info === '') getInfo();
  }, []);

  if (offline) {
    return <AlertModal offline={offline} navigation={navigation} />;
  }

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
            All about potatoes grown in Kenya
          </Text>
          <BackButton navigation={navigation} />

          <Image
            source={require('../../assets/images/pic4.jpg')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>Background</Text>
          <Text style={styles.paragraph}>
            Potato (Solanum tuberosum L) is one of the key staple crops in Kenya
            {readPar1 & (info != '') ? info?.par1.replaceAll('  ', '') : '...'}
          </Text>
          <TouchableOpacity
            style={styles.topacity}
            onPress={() => setReadPar1(!readPar1)}>
            <Text style={{color: COLORS.white}}>
              {readPar1 ? 'See less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/images/Potato-growing-counties-in-Kenya-MoALF-2016.png')}
        />
        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.primary,
          }}>
          Potato growing counties in Kenya (MoALF, 2016) 
        </Text>

        <View>
          <Text style={styles.title}>Production and uses</Text>
          <Text style={styles.paragraph}>
            The crop is widely consumed in different forms. It is estimated that
            {readPar2 & (info != '') ? info?.par2.replaceAll('  ', '') : '...'}
          </Text>
          <TouchableOpacity
            style={styles.topacity}
            onPress={() => setReadPar2(!readPar2)}>
            <Text style={{color: COLORS.white}}>
              {readPar2 ? 'See less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.orange,
          }}>
          image courtesy of Climatic Change, Its Likely Impact on Potato (
          Solanum tuberosum L.) Production in Kenya and Plausible Coping
          Measures - Scientific Figure on ResearchGate
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    padding: 10,
    color: COLORS.black,
    fontSize: SIZES.h3,
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
    fontSize: SIZES.h4,
    fontFamily: 'OpenSans-Regular',
  },
  image: {
    width: SIZES.width - 20,
    height: SIZES.height / 2,
    resizeMode: 'cover',
    marginVertical: 10,
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
export default InfoScreen1;
