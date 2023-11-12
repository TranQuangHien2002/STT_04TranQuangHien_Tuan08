import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './component/Screen01';
import Screen02 from './component/Screen02';
import Screen03 from './component/Screen03';
import SignUp from "./component/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen01'>
        <Stack.Screen
          name='Screen01' component={Screen01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Screen02' component={Screen02}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Screen03' component={Screen03}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignUp'
          options={{headerShown: false}}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

