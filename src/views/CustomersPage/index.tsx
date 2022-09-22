import React from 'react'
import { View, Text } from 'react-native'
import { BaseButton, RectButton } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

import {customers} from './customers'

import colors from '../../styles/Colors'

import DarkLogo from '../../components/DarkLogo'

import styles from './styles'

function CustomersPage (){
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.leftHeaderIcon}>
        <BaseButton
        onPress={()=> navigation.navigate('IndexPage', {id: 'indx'})}
        >
          <Feather name="arrow-left-circle" size={30} color={colors.primaryColor} />
        </BaseButton>
        </View>
        <View style={styles.userInfoBox}>
          <Text style={styles.userNameLabel}>Clientes</Text>
          <Text style={styles.userAssetLabel}>Ativos</Text>
        </View>
        <View style={styles.rightHeaderIcon}>
        <Feather name="plus-circle" size={30} color={colors.primaryColor} />
        </View>
      </View>
        <RectButton style={styles.scheduleCard}>
            <View style={styles.scheduleDay}>
              <Text style={styles.scheduleInfo}>Próximo Checkin</Text>
            </View>
            <View style={styles.scheduleHour}>
              <Text style={styles.scheduleText}>em 2 dias</Text>
            </View>
            <View style={styles.scheduleIcon}>
              <Ionicons name="ios-open-outline" size={24} color={colors.primaryColor} />
            </View>
        </RectButton>
        <View style={styles.OptionsContainer}>
               {
                 customers.map(item => 
                  <RectButton style={styles.CustomerRow} key={item.id} onPress={()=> navigation.navigate('IndexPage', {id: 'indx'})}>
                  <Text style={styles.scheduleInfo}>{item.name}</Text>
                  <Ionicons name="ios-open-outline" size={24} color={colors.primaryColor} />
                </RectButton>
                )
               }
        </View>
      <View style={styles.logoBox}>
        <DarkLogo/>
      </View>
    </View>
  )
}

export default CustomersPage
