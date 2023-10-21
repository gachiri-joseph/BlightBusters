import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import SettingsScreen from '../../screens/Home/SettingsScreen';
import DrawerHeader from '../../components/DrawerHeader';

const HomeStack = createNativeStackNavigator();
const HomeStackNav = () => {
  // const {colors} = useTheme();

  return (
    <HomeStack.Navigator screenOptions={{}}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        header:({navigation,route})=>(<DrawerHeader route={route} navigation={navigation}/>)
      }} />
      <HomeStack.Screen
      
        name="Settings"
        component={SettingsScreen}
        options={{}}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNav;
