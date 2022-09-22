import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
//navigation
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

import colors from '../../styles/Colors'

import DarkLogo from '../../components/DarkLogo'

import styles from './styles'

function IndexPage(){
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfoBox}>
          <Text style={styles.userNameLabel}>Ezequias Kuhn</Text>
          <Text style={styles.userAssetLabel}>C-level</Text>
        </View>
        <View style={styles.headerIcons}>
        <Feather name="settings" size={28} color={colors.primaryColor} />
        </View>
      </View>
        <RectButton style={styles.scheduleCard}>
            <View style={styles.scheduleDay}>
              <Feather name="calendar" size={24} color={colors.secondaryTextColor} />
              <Text style={styles.scheduleText}>Domingo, 17</Text>
            </View>
            <View style={styles.scheduleHour}>
              <Feather name="clock" size={24} color={colors.secondaryTextColor} />
              <Text style={styles.scheduleText}>18:30h</Text>
            </View>
            <View style={styles.scheduleIcon}>
              <Ionicons name="ios-open-outline" size={24} color={colors.primaryColor} />
            </View>
        </RectButton>
        <View style={styles.OptionsContainer}>
          <RectButton 
          onPress={()=> navigation.navigate('CustomersPage', {id: 'ctpage'})}
          style={styles.scheduleButton}>
                <Text style={styles.scheduleButtonText}>Clientes</Text>
          </RectButton>
          <RectButton style={styles.buttonOption}>
                <Text style={styles.buttonText}>Tasks</Text>
          </RectButton>
          <RectButton style={styles.buttonOption}>
                <Text style={styles.buttonText}>tools</Text>
          </RectButton>
        </View>
      <View style={styles.logoBox}>
        <DarkLogo/>
      </View>
    </View>
  )
}

export default IndexPage