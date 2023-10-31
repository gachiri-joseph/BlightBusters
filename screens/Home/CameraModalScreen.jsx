import React ,{useState}from 'react';
import {Modal, View,Pressable, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';
import * as ImagePicker from 'react-native-image-picker';


const CameraModalScreen = ({isVisible, onClose}) => {
  const [imageSource, setImageSource] = useState(null);
  const chooseFile = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      presentationStyle:'overCurrentContext'
    };

    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageSource(imageUri);
      }
    });
  };




  
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.InfoCont}>
          <Pressable onPress={onClose}>
            <MaterialCommunityIcons
              name="close-circle"
              color={COLORS.black}
              size={32}
            />
          </Pressable>
          <Button title='upload'   onPress={() => chooseFile('photo')}/>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContent: {
    height: '100%',
    width: '100%',
    paddingTop:70,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  InfoCont: {
    width: wp(55),
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    
    backgroundColor: COLORS.white,
  },
});

export default CameraModalScreen