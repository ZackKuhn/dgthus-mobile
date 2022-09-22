import { StatusBar } from 'expo-status-bar';
import AppStack from './src/routes/AppStack';
import {Text} from 'react-native'

import { Quicksand_400Regular, Quicksand_700Bold, useFonts  } from '@expo-google-fonts/quicksand';

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  }
}