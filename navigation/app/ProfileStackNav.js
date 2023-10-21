import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../../constants/theme';
import {View} from 'react-native'
import ProfileScreen from '../../screens/Home/ProfileScreen';
import EditProfileScreen from '../../screens/Home/EditProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen2 from '../../screens/Home/EditProfileScreen2';
import EditProfileScreen3 from '../../screens/Home/EditProfileScreen3';
const ProfileStack = createNativeStackNavigator();

const ProfileStackNav = ({navigation}) => {
  return (
    <ProfileStack.Navigator
    initialRouteName='ProfileHome'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.white,
          // shadowColor: colors.background, // iOS
          elevation: 0, // Android
          height: 80, // Specify the height of your custom header
        },
        headerTintColor: COLORS.black,
      }}>
      <ProfileStack.Screen
        name="ProfileHome"
        component={ProfileScreen}
        options={{
          title: 'My Account',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons
                name={'account-edit'}
                size={25}
                //   backgroundColor={colors.background}
                color={COLORS.black}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />

      <ProfileStack.Screen
        name="EditProfile"
        options={{
          
          title: 'Edit Profile',
        }}
        component={EditProfileScreen3}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackNav;
