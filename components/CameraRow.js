import { View, StyleSheet } from 'react-native'
import React from 'react'

const CameraRow = ({children}) => {
  return (
    <View style={styles.Container}>
     {children}
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
  });
  
export default CameraRow