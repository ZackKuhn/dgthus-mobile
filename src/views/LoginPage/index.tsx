import React from 'react'
import { View, TextInput } from 'react-native'

import SvgComponent from '../../components/Logo'

import styles from './styles'

function LoginPage (){

  return (
    <View style={styles.container}>
       <View style={styles.logoBox}>
      <SvgComponent/>
      </View>
      <View style={{ flex: 2 }}>
      <TextInput 
      style={styles.InputAbove}
      placeholderTextColor={'#444058'}
      placeholder="Seu email"
      />
      <TextInput 
      style={styles.InputBelow}
      placeholderTextColor={'#444058'}
      placeholder="Seu senha"
      />
      </View>
    </View>
  )
}

export default LoginPage