import React, { useEffect, useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home.screen';
import SwitcherContext from '../context/SwitcherContext/SwitcherContext';
import {
  darkTheme,
  lightTheme,
  DarkThemePaper,
  lightThemePaper,
} from '../utils/themes';
const Stack = createNativeStackNavigator();

export default function Navigator() {
  const { getSwitcher, switcher } = useContext(SwitcherContext);

  return (
    <PaperProvider theme={switcher ? lightThemePaper : DarkThemePaper}>
      <NavigationContainer theme={switcher ? lightTheme : darkTheme}>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 18 },
          }}
        >
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: 'Home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
