import { View, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
const BackButton = ({navigation}) => {
  return (
  
      <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
              left:10,
              zIndex: 6,
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 999,
            }}>
            <Ionicons name="arrow-back" color={COLORS.white} size={35} />
          </TouchableOpacity>

  )
}

export default BackButton