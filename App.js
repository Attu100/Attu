import {Home} from "./Framework/Screens/Home"
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from "./Framework/Navigation/StackNavigation"
import { AppProvider } from './Framework/Components/GlobalVariable';
export default function App() {
  return (
    <AppProvider>
    <NavigationContainer style={styles.container}>
      <MyStack/>
    </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
