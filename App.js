import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from "./Framework/Screens/Login";
import { SignUpScreen } from './Framework/Screens/SignUp';
import { Home } from './Framework/Screens/Home';
import { Profile } from './Framework/Screens/Profile';
import { EditeProfile } from './Framework/Screens/EditeProfile';
import { Leagues } from './Framework/Screens/Leagues';
import { OurPlans } from './Framework/Screens/OurPlans';
import { RefundPoliy } from './Framework/Screens/RefundPolicy';
import { TipsStore } from './Framework/Screens/TipsSTore';
import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from "./Framework/Navigation/StackNavigation"
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
