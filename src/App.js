import React from 'react';
import { 
  SafeAreaView, 
} from 'react-native';

import {ScreenA} from './views/screen-a'
import {ScreenB} from './views/screen-b'
import {ScreenC} from './views/screen-c'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </SafeAreaView>
  );
}
