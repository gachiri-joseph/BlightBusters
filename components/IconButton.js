import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/theme';

export default function IconButton({ icon,onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={30} color={COLORS.white}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    width: 60,
    height: 40,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
