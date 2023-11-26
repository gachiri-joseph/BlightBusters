import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {NetContext} from '../../context/NetProvider';
import AlertModal from '../../components/AlertModal';
import {COLORS, SIZES} from '../../constants/theme';
import firestore from '@react-native-firebase/firestore';
import BackButton from '../../components/BackButton';
const InfoScreen2 = ({navigation}) => {
  const {offline} = useContext(NetContext);
  const [readPar1, setReadPar1] = useState(false);
  const [readPar2, setReadPar2] = useState(false);
  const [readPar3, setReadPar3] = useState(false);
  const [info, setInfo] = useState('');
  const getInfo = async () => {
    try {
      const userDocument = await firestore()
        .collection('information')
        .doc('2')
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
          <Text style={styles.mainTitle}>Blight disease in potatoes</Text>
          <BackButton navigation={navigation} />

          <Image
            source={require('../../assets/images/pic1.jpg')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.title}>Potato diseases</Text>
          <Text style={styles.paragraph}>
            Potato diseases are caused by fungi, viruses and bacteria. The
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
        <View style={{marginBottom: 20}}>
          <Text style={styles.title}>Potato blight disease</Text>

          <Text style={styles.paragraph}>
            The diseases causing substantial yield loss in potato are
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
        <View style={{marginBottom: 20}}>
          <Text style={styles.title}>
            Favorable Environment Conditions for Late Blight
          </Text>

          <Text style={styles.paragraph}>
            Late blight pathogens develop rapidly under
            {readPar3 & (info != '') ? info?.par3.replaceAll('  ', '') : '...'}
          </Text>
          <TouchableOpacity
            style={styles.topacity}
            onPress={() => setReadPar3(!readPar3)}>
            <Text style={{color: COLORS.white}}>
              {readPar3 ? 'See less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/images/foliar_late_blight_02.png')}
        />
        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.primary,
          }}>
          Hole in potato canopy
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/images/foliar_late_blight03.png')}
        />
        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.primary,
          }}>
          Typical late blight lesions on a petiole
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/images/stem_late_blight.png')}
        />
        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.primary,
          }}>
          Sporulation on a stem
        </Text>
        <Text
          style={{
            ...styles.innerTitle,

            color: COLORS.orange,
          }}>
          images courtesy of Idaho Crop Alerts Network. Wharton, University of
          Idaho
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
export default InfoScreen2;
