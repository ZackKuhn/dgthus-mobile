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
    zIndex: 99,
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
    fontWeight: '400',
    textDecorationLine: 'underline',
    padding: 10
  },

  InputContainerAbove: {
    backgroundColor: `${colors.inputBg}`,
    minWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 60,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
    lineHeight: 30,
    paddingLeft: 15,
    marginBottom: 2
  },

  InputBoxAbove: {
    flex: 1,
    paddingHorizontal: 10,
    height: 60,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
    lineHeight: 30,
  },

  InputContainerBelow: {
    backgroundColor: `${colors.inputBg}`,
    minWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 60,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
    lineHeight: 30,
    paddingLeft: 15
  },

  InputBoxBelow: {
    flex: 1,
    paddingHorizontal: 10,
    height: 60,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
    lineHeight: 30,
  },

  button: {
    backgroundColor: `${colors.primaryColor}`,
    minWidth: '90%',
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
    paddingLeft: 25
  },

  registerButton: {
    backgroundColor: `${colors.secondaryColor}`,
    minWidth: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.primaryTextColor}`,
    fontSize: 14,
    fontWeight: '900',
    paddingLeft: 65
  },

  registerButtonText: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.secondaryTextColor}`,
    fontSize: 14,
    fontWeight: '900',
    justifyContent: 'center'
  }
});

export default styles