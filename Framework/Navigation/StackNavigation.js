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
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false, cardStyle:{flex:1}}}/>
      <Stack.Screen name="EditeProfile" component={EditeProfile} options={{headerShown:false, cardStyle:{flex:1}}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false, cardStyle:{flex:1}}}/>
      <Stack.Screen name="TipsStore" component={TipsStore} options={{headerShown:false, cardStyle:{flex:1}}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false, cardStyle:{flex:1}}}/>
      <Stack.Screen name="Leagues" component={Leagues} options={{headerShown:false, cardStyle:{flex:1}}}/>
      <Stack.Screen name="RefundPolicy" component={RefundPolicy} options={{headerShown:false, cardStyle:{flex:1}}}/>
    </Stack.Navigator>
  );
}