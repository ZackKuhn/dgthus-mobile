import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import animations from '../../../assets/animations/animations'
import Lottie from 'lottie-react-native'
import DarkLogo from '../../../components/DarkLogo'

import globalstyles from '../../../styles/globalstyles'
import styles from './styles'
import colors from '../../../styles/Colors';

function ForgotPage(){

  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.logoBox}>
        <DarkLogo/>
      </View>
      <View style={styles.WarningBox}>
        <Lottie source={require('../../../assets/animations/attention.json')} autoPlay loop={false} style={{width: 200}} />
        {/* <Text style={styles.label}>Bóra resolver {'\n'}isso juntos</Text> */}
        <Text style={styles.label}>Bóra resolver isso juntos</Text>
      </View>
      <View style={styles.EmailBox}>
        <TextInput
          style={styles.InputEmail}
          placeholderTextColor={colors.phTextColor}
          selectionColor={colors.sltColor}
          placeholder="Seu email"
          />
      </View>
      <View style={styles.actionBox}>
        <RectButton 
        style={styles.button}
        // onPress={handleNavigationToHome}
        >
              <Text style={styles.buttonText}>Enviar</Text>
          </RectButton>
      </View>
    </View>
  )
}

export default ForgotPage