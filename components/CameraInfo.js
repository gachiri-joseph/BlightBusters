import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../constants/theme';
export default function CameraInfo({isVisible, onClose}) {
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
        </View>
      </View>
    </Modal>
  );
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
