import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Recharge } from './app/screens';

const Stack = createStackNavigator();
export default function App() {

  const [fontsLoaded] = useFonts({
    "Montserrat-Black": require('./app/assets/fonts/Montserrat-Black.ttf'),
    "Montserrat-Bold": require('./app/assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-Regular": require('./app/assets/fonts/Montserrat-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Recharge"
          options={{
            headerShown: false
          }}
          component={Recharge}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}