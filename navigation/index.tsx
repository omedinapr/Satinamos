/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Platform } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PaySomeoneScreen from '../screens/PaySomeoneScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buy from '../screens/Buy';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="PaySomeoneScreen" component={PaySomeoneScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f2a900",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarStyle: Platform.OS == "android" ? { height: 60, paddingTop: 10 } : {},
          tabBarLabelStyle: Platform.OS == "android" ? { paddingBottom: 10 } : {},
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Wallets"
        component={TabTwoScreen}
        options={{
          title: 'Wallets',
          tabBarStyle: Platform.OS == "android" ? { height: 60, paddingTop: 10 } : {},
          tabBarLabelStyle: Platform.OS == "android" ? { paddingBottom: 10 } : {},
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Buy"
        component={Buy}
        options={{
          title: 'Buy',
          tabBarStyle: Platform.OS == "android" ? { height: 60, paddingTop: 10 } : {},
          tabBarLabelStyle: Platform.OS == "android" ? { paddingBottom: 10 } : {},
          tabBarIcon: ({ color }) => <TabBarIcon name="coins" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          title: 'Profile',
          tabBarStyle: Platform.OS == "android" ? { height: 60, paddingTop: 10 } : {},
          tabBarLabelStyle: Platform.OS == "android" ? { paddingBottom: 10 } : {},
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} solid={true} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
  solid?: boolean;
}) {
  return <FontAwesome5 size={20} style={{ marginBottom: -3 }} {...props} />;
}
