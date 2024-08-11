import { createStackNavigator } from '@react-navigation/stack';
import { SignUp} from '../Screens/SignUp';
import { Home } from '../Screens/Home';
import { EditeProfile } from '../Screens/EditeProfile';
import { Profile } from '../Screens/Profile';
import { TipsStore } from '../Screens/TipsSTore';
import { Login } from '../Screens/Login';
import { Leagues } from '../Screens/Leagues';
import { RefundPoliy } from '../Screens/RefundPolicy';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EditeProfile" component={EditeProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Tips store" component={TipsStore} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Leagues" component={Leagues} />
      <Stack.Screen name="Refund policy" component={RefundPoliy} />
    </Stack.Navigator>
  );
}