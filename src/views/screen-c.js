import React from 'react'

import {CenterText} from '../components/center-text'

export const ScreenC = props => {
  console.warn(props.route.params)
  return <CenterText backgroundColor="#552277">Tela C</CenterText>
}
  
