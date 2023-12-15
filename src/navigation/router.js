import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddFavorite, EditFavorite, Home, PaintingApp, ProfileApp, SearchApp, ItemFavorite, Login, Register } from '../screens';
import { Home2, Element3, Profile, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.grey(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Painting"
        //component={Discover}
        component={PaintingApp}
        options={{
          tabBarLabel: 'Painting',
          tabBarIcon: ({ focused, color }) => (
            <Element3
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchApp"
        //component={Discover}
        component={SearchApp}
        options={{
          tabBarLabel: 'SearchApp',
          tabBarIcon: ({ focused, color }) => (
            <SearchNormal1
              color={color}
              variant={focused ? 'Outline' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileApp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Profile
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>

  );
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFavorite"
        component={AddFavorite}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditFavorite"
        component={EditFavorite}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;