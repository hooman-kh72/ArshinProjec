import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LaunchScreen1 } from './PhaseI/LaunchScreen1';


export default function App() {
  
  
  return (
    <View style={styles.container}>
      <LaunchScreen1/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A020F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: 40 ,
  //   color: 'gold',
  // }
});
