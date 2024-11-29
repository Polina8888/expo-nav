import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguagesScreen from './screens/LanguagesScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Languages" component={LanguagesScreen} />
        <Tab.Screen name="..." component={NotFoundScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
