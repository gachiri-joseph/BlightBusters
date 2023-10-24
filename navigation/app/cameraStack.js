import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../../screens/Home/CameraScreen';
import ModalScreen from '../../screens/Home/ModalScreen';

const CameraStack = createNativeStackNavigator();
const CameraStackNav = () => {
  // const {colors} = useTheme();

  return (
    <CameraStack.Navigator initialRouteName='Camera' screenOptions={{}}>
 
   <CameraStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            // presentation:'transparentModal',
            headerShown:false,
         
          }}
        />
   <CameraStack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation:'transparentModal',
          }}
        />
 

      
     
    </CameraStack.Navigator>
  );
};
export default CameraStackNav;