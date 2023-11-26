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
import firestore from '@react-native-firebase/firestore';
import BackButton from '../../components/BackButton';

const Topics = ({navigation}) => {
  const {offline} = useContext(NetContext);
  const [readPar3, setReadPar3] = useState(false);
  const [readPar2, setReadPar2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [info, setInfo] = useState('');
  const getInfo = async () => {
    try {
      const userDocument = await firestore()
        .collection('topics')
        .doc('1')
        .get();
      setInfo(userDocument.data());
      console.log('info', info);
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
          <Text style={styles.mainTitle}>Popular topics</Text>
        <BackButton navigation={navigation}/>

          <Image
            source={require('../../assets/images/pic5.webp')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </View>

        <Text style={styles.title}>Potato varieties</Text>
        <Text
          style={styles.paragraph}>
          Different potato varieties perform differently depending on the
          region, climate and planting practices. Some of the well-performing
          potato varieties for the Kenyan farmer, their description and
          characteristics incude;
        </Text>

        <View style={{display: `${visible ? 'flex' : 'none'}`}}>
        
          <Text
            style={styles.innerTitle}>
            Shangi
          </Text>
          <Text
          style={styles.paragraph}>
            Shangi an oval-shaped tuber with white flesh, cream skin with medium
            to deep eyes is one of the best performing varieties. It does really
            well in
            {info != '' ? info?.shangi.replaceAll('  ', '') : '...'}
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/shangi.png')}
          />
       
          <Text
           style={styles.innerTitle}>
            Manitou
          </Text>

          <Text
          style={styles.paragraph}>
            Manitou has an oval or long oval-shaped tuber. It has red smooth
            skin, shallow eyes and pale yellow flesh. It grows well in
            {info != '' ? info?.Manitou.replaceAll('  ', '') : '...'}
          </Text>
          <Image
             style={styles.image}
            source={require('../../assets/images/manitou.jpg')}
          />
         
          <Text
          style={styles.innerTitle}>
            Sherehekea
          </Text>
          <Text
          style={styles.paragraph}>
            Sherehekea characterized with round tubers, smooth red skin with
            deep eyes and cream flesh is one of the best. Its grows in areas
            {info != '' ? info?.Sherehekea.replaceAll('  ', '') : '...'}
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/sherehekea.png')}
          />
        
          <Text
           style={styles.innerTitle}>
            Kenya Mpya
          </Text>
          <Text
          style={styles.paragraph}>
            Kenya mpya has an oval shape, smooth cream skin with creamy flesh.
            It does well in
            {info != '' ? info?.KenyaMpya.replaceAll('  ', '') : '...'}
          </Text>

          <Image
             style={styles.image}
            source={require('../../assets/images/kenyampya.jpeg')}
          />
       
          <Text
            style={styles.innerTitle}>
            Unica
          </Text>
          <Text
          style={styles.paragraph}>
            Unica has oblong tubers with red skin, shallow eyes and creamy skin.
            It does well in
            {info != '' ? info?.Unica.replaceAll('  ', '') : '...'}
          </Text>

          <Image
              style={styles.image}
            source={require('../../assets/images/unika.jpg')}
          />
          
        </View>

        <TouchableOpacity
          style={styles.topacity}
          onPress={() => setVisible(!visible)}>
          <Text style={{color: COLORS.white}}>
            {visible ? 'See less' : 'Read more'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>Potato growing areas</Text>
        <Text
       style={styles.paragraph}>
          The most favorable climatic conditions for potato farming are
          {readPar2 & (info != '') ? info?.areas.replaceAll('  ', '') : '...'}
        </Text>
        <TouchableOpacity
          style={styles.topacity}
          onPress={() => setReadPar2(!readPar2)}>
          <Text style={{color: COLORS.white}}>
            {readPar2 ? 'See less' : 'Read more'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Relevant potato agencies</Text>
        <Text
         style={styles.paragraph}>
          The National Potato Council of Kenya (NPCK) is a Public Private
          Partnership (PPP)
          {readPar3 & (info != '')
            ? info?.agencies.replaceAll('  ', '')
            : '...'}
        </Text>
        <TouchableOpacity
          style={styles.topacity}
          onPress={() => setReadPar3(!readPar3)}>
          <Text style={{color: COLORS.white}}>
            {readPar3 ? 'See less' : 'Read more'}
          </Text>
        </TouchableOpacity>
      
       
        <Text style={styles.title}>Favourable growing conditions</Text>
        <Text
        style={styles.paragraph}>
          Ecological Requirements
        </Text>

        <View style={{display: `${visible2 ? 'flex' : 'none'}`}}>
          <Text
            style={styles.innerTitle}>
            Soils
          </Text>
          <Text
          style={styles.paragraph}>
            Irish potatoes perform well in loose loamy and
            {info != '' ? info?.soils.replaceAll('  ', '') : '...'}
          </Text>

          <Text
            style={styles.innerTitle}>
            Temperatures
          </Text>

          <Text
          style={styles.paragraph}>
            Optimum yields are realized where average daily temperatures range
            between
            {info != '' ? info?.temp.replaceAll('  ', '') : '...'}
          </Text>

          <Text
           style={styles.innerTitle}>
            Rains
          </Text>
          <Text
          style={styles.paragraph}>
            The crop does well in regions that receive a regular rainfall of
            850-1400mm per annum.
          </Text>

          <Text
            style={styles.innerTitle}>
            Altitude
          </Text>
          <Text
         style={styles.paragraph}>
            Irish potato does well at attitude range of 1500-2800 M above sea
            level.
          </Text>
        </View>

        <TouchableOpacity
         style={styles.topacity}
          onPress={() => setVisible2(!visible2)}>
          <Text style={{color: COLORS.white}}>
            {visible2 ? 'See less' : 'Read more'}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            padding: 10,
            textAlign: 'center',
            color: COLORS.orange,
            fontSize: SIZES.h4,
            fontFamily: 'OpenSans-Regular',
          }}>
          articles courtesy of The Organic Farmer,CKL Africa Limited,National Potato Council of Kenya,
          Greenlife Crop Protection Africa.Images courtesy of National Potato Council of Kenya,
          AGRIPOM LTD,Agrico UK Ltd,ibuilder-en.techinfus.com.
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
  paragraph:{
    padding: 10,
    color: COLORS.primary,
    fontSize: SIZES.h4,
    fontFamily: 'OpenSans-Regular',
  },innerTitle:{
    padding: 10,
    color: COLORS.orange,
    fontSize: SIZES.h3,
    fontFamily: 'OpenSans-SemiBold',
  },
  image:{
    width: SIZES.width - 20,
    height: SIZES.height /4,
    resizeMode: 'contain',
  
    margin: 10,
  },topacity:{
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SIZES.width / 3,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default Topics;
