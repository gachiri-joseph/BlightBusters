import React, {createContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
export const NetContext = createContext();
const NetProvider = ({children}) => {
  const [offline, setOffline] = useState(null);
  // const [isConnected,setIsConnected]=useState(null)

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      //   console.log(offline);
      setOffline(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <NetContext.Provider
      value={{
        offline,
        setOffline,
        showAlert: () => {
          Alert.alert(
            'No Internet connection! ❌',
            'Sorry, we need an Internet connection for BlightBusters to run correctly.',
            [
              {
                text: 'Okay',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
            ],
          );
        },
      }}>
      {children}
    </NetContext.Provider>
  );
};

export default NetProvider;
