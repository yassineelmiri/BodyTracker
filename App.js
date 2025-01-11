import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BodyFatScreen from './screens/BodyFatScreen';
import PhotosScreen from './screens/PhotosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'BodyFat') {
              iconName = focused ? 'fitness' : 'fitness-outline';
            } else if (route.name === 'Photos') {
              iconName = focused ? 'camera' : 'camera-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ea',
          tabBarInactiveTintColor: '#8e8e8e',
          tabBarStyle: {
            backgroundColor: '#121212',
            borderTopWidth: 0,
            height: 65,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          headerStyle: {
            backgroundColor: '#6200ea',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="BodyFat" component={BodyFatScreen} />
        <Tab.Screen name="Photos" component={PhotosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
