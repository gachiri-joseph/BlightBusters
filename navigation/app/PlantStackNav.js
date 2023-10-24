import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlantDetailScreen from '../../screens/Home/PlantDetailScreen';
import PlantScreen from '../../screens/Home/PlantScreen';



const PlantStack= createNativeStackNavigator();
const PlantStackNav = ({navigation}) => {
  // const {colors} = useTheme();

  return (
    <PlantStack.Navigator initialRouteName='ProfileHome' screenOptions={{}}>
      <PlantStack.Screen
        name="PlantsHome"
        component={PlantScreen}
        options={{
            headerShown: true,
            title:'My plants'
         }}
      />
      <PlantStack.Screen
        name="PlantDetails"
        component={PlantDetailScreen}
        options={{
          headerShown: false,
        }}
      /> 
    </PlantStack.Navigator>
  );
};
export default PlantStackNav;