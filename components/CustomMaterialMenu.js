import 'react-native-gesture-handler';
import React, {useState} from 'react';
//import react in our code.
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Switch,
  useWindowDimensions,
} from 'react-native';
//import all the components we are going to use.
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
//import menu and menu item
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/theme';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
const CustomMaterialMenu = ({
  isIcon,
  menuText,
  textStyle,
  route,
  navigation,
}) => {
  const [darkmode, setDarkmode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const {width} = useWindowDimensions();
  const [theme, setTheme] = useState('dim');
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => {
    // console.log('vertical menu pressed')
    setVisible(true);}
  async function handleLogout() {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (e) {
      showMessage({
        message: 'failed to log out!',
        type: 'danger',
        icon: 'danger',
      });
    }
  }
  return (
    <View>
      <Menu
        style={{
          position: 'absolute',
          top: 56,
          left:355,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderRadius: 15,
        }}
        visible={visible}
        anchor={
          isIcon ? (
            <TouchableOpacity onPress={()=>showMenu()}>
              <MaterialCommunityIcons
                name={'dots-vertical'}
                size={24}
                color={'black'}
              />
            </TouchableOpacity>
          ) : (
            <Text onPress={showMenu} style={textStyle}>
              {menuText}
            </Text>
          )
        }
        onRequestClose={hideMenu}>
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
            // backgroundColor: COLORS.black,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Dark mode</Text>
              <Switch
                style={{marginLeft: 'auto'}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => setDarkmode(!darkmode)}
                value={darkmode}
              />
            </View>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          style={{
            width: '100%',
            color: COLORS.white,
            display: 'flex',
            // backgroundColor: COLORS.black,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Enable notifications</Text>
              <Switch
                style={{marginLeft: 'auto'}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                value={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </View>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
            // backgroundColor: COLORS.black,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Terms of use</Text>
              <Switch
                style={{marginLeft: 'auto'}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => setDarkmode(!darkmode)}
                value={darkmode}
              />
            </View>
          </View>
        </MenuItem>
        <MenuDivider/>
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
            // backgroundColor: COLORS.black,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Privacy policy</Text>
              <Switch
                style={{marginLeft: 'auto'}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => setDarkmode(!darkmode)}
                value={darkmode}
              />
            </View>
          </View>
        </MenuItem>
        {/* <MenuDivider/>
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
            // backgroundColor: COLORS.black,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.contentContainer}>
            <TouchableOpacity>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Logout</Text>
                <Feather
                  style={{marginLeft: 'auto'}}
                  name="log-out"
                  color={COLORS.black}
                  size={20}
                  onPress={handleLogout}
                />
              </View>
            </TouchableOpacity>
          </View>
        </MenuItem> */}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    width: 200,
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  row: {
    flex: 1,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    // backgroundColor:'black'
  },
  subtitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default CustomMaterialMenu;
