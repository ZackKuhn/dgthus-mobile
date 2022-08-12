import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import colors from '../../styles/Colors'

import DarkLogo from '../../components/DarkLogo'

import styles from './styles'

function LoginPage (){

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfoBox}>
          <Text style={styles.userNameLabel}>Ezequias Kuhn</Text>
          <Text style={styles.userAssetLabel}>teclado</Text>
        </View>
        <View style={styles.headerIcons}>
        <Feather name="settings" size={28} color={colors.primaryColor} />
        </View>
      </View>
      <View style={styles.ScheduleCard}>
      </View>
      <View style={styles.logoBox}>
        <DarkLogo/>
      </View>
    </View>
  )
}

export default LoginPage