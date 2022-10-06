import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Home';
import FormResultPage from './FormResult';
import PreviewPage from './Preview';
export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Preview" component={PreviewPage} />
        <Stack.Screen name="Result" component={FormResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
