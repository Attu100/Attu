import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from "./Framework/Screens/Login";
import { SignUpScreen } from './Framework/Screens/SignUp';
import { Home } from './Framework/Screens/Home';
import { Profile } from './Framework/Screens/Profile';
import { EditeProfile } from './Framework/Screens/EditeProfile';
import { Leagues } from './Framework/Screens/Leagues';
import { OurPlans } from './Framework/Screens/OurPlans';
export default function App() {
  return (
    <View style={styles.container}>
      <OurPlans/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
