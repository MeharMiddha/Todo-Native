import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List'
import Login from './app/screens/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    onAuthStateChanged;
  })
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='MyTodos'>
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

