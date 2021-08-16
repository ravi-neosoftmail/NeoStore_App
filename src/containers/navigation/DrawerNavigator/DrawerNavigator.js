import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../StackNavigator/StackNavigator';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="NeoStore" component={StackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
