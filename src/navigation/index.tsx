import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'src/navigation/RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'src/navigation/route';
import Splash from 'src/screens/onBoarding/splash';
import Intro from 'src/screens/onBoarding/intro';

const Stack = createNativeStackNavigator();
export default (): JSX.Element | null => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 200,
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Intro} component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
