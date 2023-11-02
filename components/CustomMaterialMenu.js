import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/theme';

const CustomMaterialMenu = ({isIcon, menuText, textStyle}) => {
  const [darkmode, setDarkmode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [theme, setTheme] = useState('dim');
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => {
    // console.log('vertical menu pressed')
    setVisible(true);
  };
  return (
    <View>
      <Menu
        style={{
          position: 'absolute',
          top: 56,
          left: 355,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderRadius: 15,
        }}
        visible={visible}
        anchor={
          isIcon ? (
            <TouchableOpacity onPress={() => showMenu()}>
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
              <MaterialCommunityIcons
                name={'theme-light-dark'}
                size={24}
                color={COLORS.primary}
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
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Enable notifications</Text>
              <MaterialCommunityIcons
                name={'bell'}
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Terms of use</Text>
              <MaterialCommunityIcons
                name={'note-text'}
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          style={{
            color: COLORS.white,
            display: 'flex',
            borderRadius: 15,
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Privacy policy</Text>

              <MaterialCommunityIcons
                name={'lock'}
                size={24}
                color={COLORS.primary}
              />
              {/* <Switch
                style={{marginLeft: 'auto'}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => setDarkmode(!darkmode)}
                value={darkmode}
              /> */}
            </View>
          </View>
        </MenuItem>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    width: 200,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  row: {
    flex: 1,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  subtitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default CustomMaterialMenu;
