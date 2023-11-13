import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZES} from '../constants/theme';
const AlertModal = ({offline,navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onClose = () => {
    setIsModalVisible(false);
    navigation.goBack()
  };
  const onModalClose = () => {

    if(offline){
        setIsModalVisible(true);
    }
    else{
     setIsModalVisible(false);
    }
    
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isModalVisible}
      style={{flex: 1}}
      onRequestClose={() => onClose() }
    >
      <View style={styles.modalContent}>
        <View
          style={{
            height: SIZES.height / 2.2,
            width: SIZES.width - 30,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
          }}>
          <Feather name={'alert-triangle'} size={80} color={COLORS.orange} />
          <Text
            style={{
              color: 'black',
              fontFamily: 'OpenSans-SemiBold',
              fontSize: SIZES.h4,
            }}>
            Something went wrong
          </Text>
          <Text
            style={{
              color: COLORS.gray2,
              fontFamily: 'OpenSans-Medium',
              fontSize: SIZES.h5,
            }}>
            A network error occurred.Please try again.
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: '35%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.gray2,
              borderRadius: 20,
            }}
              onPress={() => onModalClose()}
          >
            <Text
              style={{
                color: 'black',
                fontFamily: 'OpenSans-Medium',
                fontSize: SIZES.h5,
              }}>
              Try again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContent: {
    height: SIZES.height / 2,
    width: SIZES.width,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
export default AlertModal;
