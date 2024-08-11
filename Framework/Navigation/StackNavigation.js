import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen} from '../Screens/SignUp';
import { Home } from '../Screens/Home';
import { EditeProfile } from '../Screens/EditeProfile';
import { Profile } from '../Screens/Profile';
import { TipsStore } from '../Screens/TipsSTore';
import { Login } from '../Screens/Login';
import { Leagues } from '../Screens/Leagues';
import { RefundPolicy } from '../Screens/RefundPolicy';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false, cardStyle:{flex:1}}}  />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{cardStyle:{flex:1}}}/>
      <Stack.Screen name="EditeProfile" component={EditeProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TipsStore" component={TipsStore} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Leagues" component={Leagues} />
      <Stack.Screen name="RefundPolicy" component={RefundPolicy} />
    </Stack.Navigator>
  );
}