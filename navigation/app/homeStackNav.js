import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import DrawerHeader from '../../components/DrawerHeader';
import PlantDetailScreen from '../../screens/Home/PlantDetailScreen';
import InfoScreen1 from '../../screens/Home/InfoScreen1';
import InfoScreen2 from '../../screens/Home/InfoScreen2';
import InfoScreen3 from '../../screens/Home/InfoScreen3';


const HomeStack = createNativeStackNavigator();
const HomeStackNav = () => {
  // const {colors} = useTheme();

  return (
    <HomeStack.Navigator screenOptions={{}}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({navigation, route}) => (
            <DrawerHeader route={route} navigation={navigation} />
          ),
        }}
      />
      <HomeStack.Screen
        name="PlantDetails"
        component={PlantDetailScreen}
        options={{
          headerShown: false,
        }}
      />
       <HomeStack.Screen
        name="InfoScreen1"
        component={InfoScreen1}
        options={{
          title:'Potato farming in Kenya',
          // headerShown: false,
        }}
      />
       <HomeStack.Screen
        name="InfoScreen2"
        component={InfoScreen2}
        options={{
          title:'Blight disease in potatoes'
          // headerShown: false,
        }}
      />
       <HomeStack.Screen
        name="InfoScreen3"
        component={InfoScreen3}
        options={{
          title:'How we diagnose blight disease'
          // headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNav;
