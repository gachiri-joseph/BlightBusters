import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultsDetectedScreen from '../../screens/Home/ResultsDetectedScreen';
import ResultsNotDetectedScreen from '../../screens/Home/ResultsNotDetectedScreen';




const ResultsStack= createNativeStackNavigator();
const ResultsStackNav = ({navigation}) => {
  // const {colors} = useTheme();

  return (
    <ResultsStack.Navigator initialRouteName='ProfileHome' screenOptions={{}}>
      <ResultsStack.Screen
        name="resultsDetected"
        component={ResultsDetectedScreen}
        options={{
            headerShown: false,
            title:''
         }}
      />
      <ResultsStack.Screen
        name="resultsNotDetected"
        component={ResultsNotDetectedScreen}
        options={{
          headerShown: false,
        }}
      /> 
    </ResultsStack.Navigator>
  );
};
export default ResultsStackNav;