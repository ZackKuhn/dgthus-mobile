import { StyleSheet } from 'react-native';

import colors from '../../styles/Colors'

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: `${colors.darkBg}`,
    alignItems: 'center',
    padding: 20,
  },
  
  logoBox: {
    height: 240,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  loginBox: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },  

  //Container que aloca o botão "entrar"
  actionBox:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /*Textos que recebem underline e que permitem ações 
  **tela de login: Esqueceu sua senha?*/
  label:{
    height: 50,
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.secondaryTextColor}`,
    fontSize: 14,
    lineHeight: 30,
    textDecorationLine: 'underline',
    padding: 10
  },

  InputAbove: {
    backgroundColor: `${colors.inputBg}`,
    minWidth: '80%',
    paddingHorizontal: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 48,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
    lineHeight: 30,
  },

  InputBelow: {
    backgroundColor: `${colors.inputBg}`,
    minWidth: '80%',
    marginTop: 2,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 48,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
  },

  button: {
    backgroundColor: `${colors.primaryColor}`,
    justifyContent: 'center',
    minWidth: '80%',
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.primaryTextColor}`,
    fontSize: 14,
    fontWeight: '900'
  }
});

export default styles