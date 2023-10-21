import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  ImageBackground,
  useWindowDimensions,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants/theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';
import {ScrollView} from 'react-native-gesture-handler';

export default function EditProfileScreen() {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const {width} = useWindowDimensions();
  const [theme, setTheme] = useState('dim');
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  //   const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      //   bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      //   bs.current.snapTo(1);
    });
  };
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ['65%'];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  function handleDismissModal() {
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }
  return (
    <BottomSheetModalProvider>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 999,
              }}>
              {image ? (
                <Avatar.Image source={{uri: image}} size={140} />
              ) : (
                <Avatar.Image
                  source={require('../../assets/images/135.png')}
                  size={140}
                />
              )}

            </View>
            <TouchableOpacity onPress={handlePresentModal}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  marginHorizontal: -30,
                  marginBottom: 10,
                }}>
                <MaterialCommunityIcons
                  name="camera"
                  size={24}
                  color="black"
                  // style={{
                  //   opacity: 0.7,
                  //   alignItems: 'center',
                  //   justifyContent: 'center',
                  //   borderWidth: 1,
                  //   borderColor: '#fff',
                  //   borderRadius: 10,
                  // }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            John Doe
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-circle-o" color={COLORS.black} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: COLORS.black,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-circle-o" color={COLORS.black} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: COLORS.black,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={COLORS.black} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: COLORS.black,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={COLORS.black} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: COLORS.black,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={COLORS.black}
            size={20}
          />
          <TextInput
            placeholder="Town"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: COLORS.black,
              },
            ]}
          />
        </View>
        <FormButton title="Save" onPress={() => {}} />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{borderRadius: 50}}
          onDismiss={() => setIsOpen(false)}>
          <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Upload Photo</Text>
              <Text style={styles.panelSubtitle}>
                Choose Your Profile Picture
              </Text>
            </View>
            <FormButton title="Take Photo"  onPress={takePhotoFromCamera} />
            <FormButton title="Choose From Library"  onPress={choosePhotoFromLibrary}/>
            <FormButton title="Cancel"  onPress={handleDismissModal}/>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  contentContainer: {
    backgroundColor: COLORS.gray2,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontWeight: '900',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: '#101318',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#56636F',
    fontSize: 13,
    fontWeight: 'normal',
    width: '100%',
  },
});
