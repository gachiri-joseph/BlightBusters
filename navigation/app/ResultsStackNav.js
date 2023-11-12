import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ResultsStack = createNativeStackNavigator();
const ResultsStackNav = ({navigation, route}) => {
  // const {colors} = useTheme();
  console.log('params', route.params.label);
  let routeName;
  if (
    route.params.label === 'Late Blight' ||
    route.params.label === 'Early Blight'
  ) {
    routeName = 'resultsDetected';
  } else {
    routeName = 'resultsNotDetected';
  }

  return (
    <ResultsStack.Navigator initialRouteName={routeName} screenOptions={{}}>
      {/* <ResultsStack.Screen
        name="resultsDetected"
        component={ResultsDetectedScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      /> */}
      {/* 
      <ResultsStack.Screen
        name="resultsNotDetected"
        component={ResultsNotDetectedScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </ResultsStack.Navigator>
  );
};
export default ResultsStackNav;
