import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Stack from './Stack'

export default props => 
    <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#247ba0"/>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>