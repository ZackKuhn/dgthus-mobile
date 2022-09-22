import { StyleSheet } from 'react-native';

import colors from '../../styles/Colors'

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#18171F',
    alignItems: 'center',
  },

  OptionsContainer:{
    width: '100%',
    flex: .7,
    marginTop: 100,
    paddingHorizontal: 24,
  },

  CustomerRow:{
    width: '100%',
    flex: .15,  
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#272531',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  
  logoBox: {
    height: 240,
    width: '100%',  
    justifyContent: 'flex-end',
    paddingBottom: 40,
    alignItems: 'center',
  },
  
  header: {
    flex: .3,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: `${colors.pureDarkBg}`,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userInfoBox:{
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  userNameLabel:{
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.primaryTextColor}`,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20
  },

  userAssetLabel:{
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.secondaryTextColor}`,
    fontSize: 14,
    lineHeight: 16
  },

  rightHeaderIcon:{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30
  },

  leftHeaderIcon:{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30
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
  },

  //-------------| SCHEDULE STYLES |-----------------
  
  scheduleCard: {
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: 10,
    top: 120,
    width: '88%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.secondaryColor}`,
    padding: 24
  },

  scheduleDay: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  scheduleHour: {
    flex: 1.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  scheduleIcon: {
    flex: .3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },

  scheduleText: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.secondaryTextColor}`,
    fontSize: 14,
    padding: 6
  },

  scheduleInfo: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.primaryTextColor}`,
    fontSize: 14,
    padding: 6
  },

  scheduleButton: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    backgroundColor: `${colors.primaryColor}`,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonOption:{
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: `${colors.secondaryColor}`,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scheduleButtonText: {
    fontFamily: 'Quicksand_400Regular',
    color: `${colors.primaryTextColor}`,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 6
  }

  
  
});

export default styles