import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import SvgComponent from '../../components/Logo'

import styles from './styles'

function LoginPage (){

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <SvgComponent/>
      </View>
    </View>
  )
}

export default LoginPage