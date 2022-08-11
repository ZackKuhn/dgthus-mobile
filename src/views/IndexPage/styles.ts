import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: '#18171F',
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
  },

  //Texto na tela de login: Esqueceu sua senha?
  label:{
    height: 50,
    fontFamily: 'Quicksand_400Regular',
    color: '#908CA6',
    fontSize: 14,
    lineHeight: 30,
    textDecorationLine: 'underline'
  },

  InputAbove: {
    backgroundColor: '#272531',
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
    backgroundColor: '#272531',
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
    backgroundColor: "#8B5CD0",
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
    color: '#fff',
    fontSize: 14,
    fontWeight: '900'
  }
});

export default styles