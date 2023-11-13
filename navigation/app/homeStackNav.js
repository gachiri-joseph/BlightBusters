import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import InfoScreen1 from '../../screens/Home/InfoScreen1';
import InfoScreen2 from '../../screens/Home/InfoScreen2';
import InfoScreen3 from '../../screens/Home/InfoScreen3';
import Topic1 from '../../screens/Home/Topic1';


const HomeStack = createNativeStackNavigator();
const HomeStackNav = () => {
  // const {colors} = useTheme();

  return (
    <HomeStack.Navigator screenOptions={{}} initialRouteName='Home'>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle:'BlightBusters',
          headerTitleStyle:{fontFamily:'OpenSans-SemiBold'}
        }}
      />
       <HomeStack.Screen
        name="InfoScreen1"
        component={InfoScreen1}
        options={{
          title:'Potato farming in Kenya',
          headerShown: false,
        }}
      />
       <HomeStack.Screen
        name="InfoScreen2"
        component={InfoScreen2}
        options={{
          title:'Blight disease in potatoes',
          headerShown: false,
        }}
      />
       <HomeStack.Screen
        name="InfoScreen3"
        component={InfoScreen3}
        options={{
          title:'How we diagnose blight disease',
          headerShown: false,
        }}
      />
        <HomeStack.Screen
        name="Topic1"
        component={Topic1}
        options={{
          headerTitle:'Potato varieties'
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNav;
