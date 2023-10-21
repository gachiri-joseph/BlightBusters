import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';
import Animated from 'react-native-reanimated';
import {COLORS,SIZES} from '../../constants/theme'
const EditProfileScreen = () => {
  return (
    <View style={styles.container} >
      
      <View style={styles.topUserInfoSection}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end'}}>
          <View    style={{width:150,height:150,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:999}}>
          <Avatar.Image
            source={require('../../assets/images/135.png')}
            size={140}
          />
          </View>
          <TouchableOpacity onPress={() => {}}>
          <View
                  style={{
                    width:40,height:40,borderRadius:999,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'white',
                    marginHorizontal:-30,marginBottom:10
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
      </View>
      <View style={{paddingHorizontal:20}}>
      <View style={styles.LoginTextInputContainer}>
        <View style={styles.LoginTextInputInnerContainer}>
        <FontAwesome name="user" color="#777777" size={20}  style={styles.LoginTextInputIcon} />
       
          <TextInput
              placeholder="First Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              // value={userData ? userData.fname : ''}
              // onChangeText={(txt) => setUserData({...userData, fname: txt})}
            numberOfLines={1}
         
            style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}}
          
          />
        
        </View>
      </View>
    
      <View style={styles.LoginTextInputContainer}>
        <View style={styles.LoginTextInputInnerContainer}>
        <FontAwesome name="user" color="#777777" size={20}  style={styles.LoginTextInputIcon} />
       
          <TextInput
               placeholder="Last Name"
               placeholderTextColor="#666666"
               // value={userData ? userData.lname : ''}
               // onChangeText={(txt) => setUserData({...userData, lname: txt})}
            numberOfLines={1}
            autoCorrect={false}
            style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}}
          
          />
        
        </View>
      </View>
       
        {/* <View style={styles.action}>
          <Ionicons name="clipboard" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            // value={userData ? userData.about : ''}
            // onChangeText={(txt) => setUserData({...userData, about: txt})}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View> */}
        <View style={styles.LoginTextInputContainer}>
        <View style={styles.LoginTextInputInnerContainer}>
        <FontAwesome name="phone" color="#777777" size={20}  style={styles.LoginTextInputIcon} />
       
          <TextInput
             placeholder="Phone"
             placeholderTextColor="#666666"
             keyboardType="number-pad"
             autoCorrect={false}
             // value={userData ? userData.phone : ''}
             // onChangeText={(txt) => setUserData({...userData, phone: txt})}
            numberOfLines={1}
            style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}}
          
          />
        
        </View>
      </View>
       

        {/* <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            // value={userData ? userData.country : ''}
            // onChangeText={(txt) => setUserData({...userData, country: txt})}
            style={styles.textInput}
          />
        </View> */}
      <View style={styles.LoginTextInputContainer}>
        <View style={styles.LoginTextInputInnerContainer}>
        <MaterialCommunityIcons
            name="map-marker"
            color="#777777"
            size={20}
            style={styles.LoginTextInputIcon}
          />
          <TextInput
            autoCorrect={false}
            numberOfLines={1}
            placeholder="Change location"
            placeholderTextColor="#666666"
           // value={userData ? userData.city : ''}
            // onChangeText={(txt) => setUserData({...userData, city: txt})}
            style={{flex: 1, color: COLORS.black, fontSize: SIZES.medium}}
          
          />
        
        </View>
      </View>
      
        <FormButton title="Save" onPress={() => {}} />
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LoginTextInputContainer: {
    width: '100%',
    marginBottom: 20,
    // marginHorizontal:20,
  },
  LoginTextInputInnerContainer: {
    borderColor: 'black',
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 55,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  LoginTextInputIcon: {
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topUserInfoSection: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
   paddingHorizontal:20,
    height:200,
    backgroundColor:COLORS.gray2,
    marginBottom: 25,
  },
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
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
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
    backgroundColor: '#2e64e5',
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
    color: 'pink',
    backgroundColor:'pink'
  },
});

export default EditProfileScreen
