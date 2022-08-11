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

  title: {
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  InputAbove: {
    backgroundColor: '#272531',
    minWidth: '75%',
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
    minWidth: '75%',
    marginTop: 2,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 48,
    fontFamily: 'Quicksand_400Regular',
    color: '#fff',
    fontSize: 14,
  }
});

export default styles