import React from 'react'
import{TouchableOpacity, Text} from 'react-native'

export default ({children, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#123'
    }}
    onPress={onPress}>
    <Text
      style={{
        color: '#FFF',
        fontSize: 25,
      }}
    >
      {children}  
    </Text>
  </TouchableOpacity>
)