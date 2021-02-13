import React from 'react'

import {CenterText} from '../components/center-text'

export const ScreenB = props => {
  console.warn(props.route.params)
  return <CenterText backgroundColor="#995551">Tela B</CenterText>

}
