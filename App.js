import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from "./Framework/Screens/Login";
import { SignUpScreen } from './Framework/Screens/SignUp';
import { Home } from './Framework/Screens/Home';
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
