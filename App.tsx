import { Entry } from './src/Entry';
import { List } from './src/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name='Entry' component={Entry} />
        <Stack.Screen name='List' component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}