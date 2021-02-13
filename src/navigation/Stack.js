
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StepToStep from '../components/step-to-step'

const Stack = createStackNavigator()

import { ScreenA } from '../views/screen-a'
import { ScreenB } from '../views/screen-b'
import { ScreenC } from '../views/screen-c'

const TxT = ({ text }) => <View><Text>{text}</Text></View>

export default () => (
  <Stack.Navigator initialRouteName='ScreenA'>
    <Stack.Screen
      options={{
        title: 'Screen A',
        headerStyle: {
          backgroundColor: '#247ba0',
        },
        headerTintColor: "#fffcff",
        headerTitleStyle: {
          textAlign: 'center',
          fontWeight: '400',
        },
      }}
      name="ScreenA">
      {
        props => (
          <StepToStep {...props} next='ScreenB'>
            <ScreenA />
          </StepToStep>
        )
      }
    </Stack.Screen>
    <Stack.Screen
      options={{
        title: 'Screen B'
      }}
      name="ScreenB">
      {
        props => (
          <StepToStep {...props} previous next='ScreenC'>
            <ScreenB {...props} />
          </StepToStep>
        )
      }
      </Stack.Screen>
    <Stack.Screen
      options={{
        title: 'Screen C'
      }}
      name="ScreenC">
      {
        props => (
          <StepToStep {...props} previous>
            <ScreenC  {...props}/>
          </StepToStep>
        )
      }
      </Stack.Screen>
  </Stack.Navigator>
)