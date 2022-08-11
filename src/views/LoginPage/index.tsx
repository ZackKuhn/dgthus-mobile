import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import colors from '../../styles/Colors';

import SvgComponent from '../../components/Logo';

import styles from './styles';

function LoginPage (){
  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate("IndexPage");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <SvgComponent/>
      </View>
      <View style={styles.loginBox}>
        <TextInput
        style={styles.InputAbove}
        placeholderTextColor={colors.phTextColor}
        selectionColor={colors.sltColor}
        placeholder="Seu email"
        />
        <TextInput 
        style={styles.InputBelow}
        placeholderTextColor={colors.phTextColor}
        selectionColor={colors.sltColor}
        placeholder="Seu senha"
        />
        <Text style={styles.label}>Esqueceu sua senha?</Text>
      </View>
      <View style={styles.actionBox}>
        <RectButton 
        style={styles.button}
        onPress={handleNavigationToHome}
        >
              <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
          <Text style={styles.label}>Preciso me cadastrar!</Text>
      </View>
    </View>
  )
}

export default LoginPage