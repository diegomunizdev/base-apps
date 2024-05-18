import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { darkTheme, lightTheme } from '../../application/theme/theme';
import { HomeView } from './Home/HomeView';
import { SettingsView } from './Settings/SettingsView';
import { useLayoutContext } from '../../application/contexts/layout/layout.context';

const Stack = createNativeStackNavigator();

export const Routes = (): JSX.Element => {
  const { theme } = useLayoutContext();

  return (
    <NavigationContainer
      independent={true}
      theme={theme === 'dark' ? darkTheme : lightTheme}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'fade',
          statusBarStyle: theme === 'dark' ? 'light' : 'dark',
          statusBarTranslucent: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeView}
          initialParams={{ userId: 42 }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
