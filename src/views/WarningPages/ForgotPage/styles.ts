import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: '80%',
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: '#18171F',
    alignItems: 'center',
    padding: 20,
  },
  
  WarningBox: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  EmailBox: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }, 

  //Container que aloca o botão "entrar"
  actionBox:{
    flex: 2,
  },

  label:{
    fontFamily: 'Quicksand_400Regular',
    color: '#8F96A1',
    fontSize: 18,
    fontWeight: '900',
    paddingBottom: 20
  },

  infoText:{
    fontFamily: 'Quicksand_400Regular',
    color: '#8F96A1',
    fontSize: 14,
  },

  InputEmail: {
    backgroundColor: '#272531',
    minWidth: '90%',
    paddingHorizontal: 24,
    borderRadius: 12,
    height: 60,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
  },

  button: {
    backgroundColor: "#8B5CD0",
    justifyContent: 'center',
    minWidth: '90%',
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