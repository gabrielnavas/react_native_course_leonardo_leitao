import React from 'react'
import { View, Button } from 'react-native'


export default (props) => {
  return (
    <View >
      <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        backgroundColor: '#F5F5F5',
        paddingTop: 5,
        paddingBottom: 5,
      }}>
        {props.previous && (
            <Button
              color='#156482'
              title='  Go back  '
              onPress={() => props.navigation.goBack()}
            />
        )}
        {props.next && (
            <Button
              title='  Next  '
              onPress={() => props.navigation.navigate(
                props.next,
                {numbeRandom: parseInt( Math.random() * 100)}
              )}
            />
        )}
      </View>
      <View >
        {props.children}
      </View>
    </View>
  )
}