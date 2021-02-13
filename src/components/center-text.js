import React from 'react'
import {View, Text} from 'react-native'

export const CenterText = ({backgroundColor, color, children}) => {
  return (
    <View style={{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor || "#000"
    }}>
      <Text style={{
        fontSize: 50, 
        color: color || '#FFF'
      }}>{children}</Text>
    </View>
  )
}