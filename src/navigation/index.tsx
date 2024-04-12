import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'src/navigation/RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'src/navigation/route';
import Splash from 'src/screens/onBoarding/splash';
import Intro from 'src/screens/onBoarding/intro';
import HomeScreen from 'src/screens/tabs/home';
import PostScreen from 'src/screens/tabs/post';
import ProfileScreen from 'src/screens/tabs/profile';
import SearchScreen from 'src/screens/tabs/search';
import ReelScreen from 'src/screens/tabs/reels';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BackHandler, ToastAndroid} from 'react-native';
import {STRING} from 'src/utils';
import CustomTabBar from 'src/navigation/custom_tab_bar';
import PostDetails from 'src/screens/tabs/profile/postDetail';
import Setting from 'src/screens/tabs/profile/setting';
import VideoDetailScreen from 'src/screens/tabs/profile/video/videoDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
let backPressed = 0;
export default (): JSX.Element | null => {
  function handleBackButton() {
    if (backPressed > 0) {
      BackHandler.exitApp();
      backPressed = 0;
    } else {
      backPressed++;
      ToastAndroid.show(STRING.spalsh.press_again, ToastAndroid.SHORT);
      setTimeout(() => {
        backPressed = 0;
      }, 1000);
      return true;
    }
  }
  function TabComponent() {
    return (
      <Tab.Navigator
        backBehavior={'none'}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name={Routes.HomeScreen}
          component={HomeScreen}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.PostScreen}
          component={PostScreen}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.ProfileScreen}
          component={ProfileScreen}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.SearchScreen}
          component={SearchScreen}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.ReelScreen}
          component={ReelScreen}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
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
        <Stack.Screen name={Routes.Dashboard} component={TabComponent} />
        <Stack.Screen name={Routes.PostDetails} component={PostDetails} />
        <Stack.Screen name={Routes.Setting} component={Setting} />
        <Stack.Screen
          name={Routes.VideoDetailScreen}
          component={VideoDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
