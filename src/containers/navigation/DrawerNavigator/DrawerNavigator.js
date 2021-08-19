import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../StackNavigator/StackNavigator';
import CustomDrawerContent from './CustomDrawerContent';


/**
 *
 * @param {*} param0 
 * @description This is DrawerNavigator screen which is used to create Drawer Navigator UI.
 * @author Ravi Ranjan
 * @returns the navigation to navigate between screens.
 */


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
