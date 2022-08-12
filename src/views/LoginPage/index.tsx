import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
// import Lottie from 'lottie-react-native';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

//Navigation Page types
import { RootStackParamList } from '../../types';
//Cores padrões da aplicação
import colors from '../../styles/Colors';
//Exporta a logo TURMATUNE
import SvgComponent from '../../components/Logo';

import CableIcon from '../../components/CableIcon';
import styles from './styles';

function LoginPage (){
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handleNavigationToHome() {
    navigation.navigate('IndexPage', {id: 'indx'});
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <SvgComponent/>
      </View>
      <View style={styles.loginBox}>
        <View style={styles.InputContainerAbove}>
          <MaterialIcons name="email" size={24} color={colors.darkIconColor} />
          <TextInput
          style={styles.InputBoxAbove}
          placeholderTextColor={colors.phTextColor}
          selectionColor={colors.sltColor}
          placeholder="Seu email"
          />
        </View>
        <View style={styles.InputContainerBelow}>
          <Entypo name="lock-open" size={24} color={colors.darkIconColor} />
        <TextInput 
        secureTextEntry={true}
          style={styles.InputBoxBelow}
        placeholderTextColor={colors.phTextColor}
        selectionColor={colors.sltColor}
        placeholder="Seu senha"
        />
        </View>
        <Text onPress={()=> navigation.navigate('ForgotPage', {id: 'frgt'})} style={styles.label}>Esqueceu sua senha?</Text>
      </View>
      <View style={styles.actionBox}>
        <RectButton 
        style={styles.button}
        onPress={handleNavigationToHome}
        >
          <CableIcon/>
          <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
          <RectButton 
        style={styles.registerButton}
        onPress={handleNavigationToHome}
        >
          <Text style={styles.registerButtonText}>Cadastrar</Text>
          </RectButton>
      </View>
    </View>
  )
}

export default LoginPage