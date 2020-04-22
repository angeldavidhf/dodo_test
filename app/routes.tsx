import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateUser from './layouts/CreateUser';
import ListUser from './layouts/ListUser';

const Drawer = createDrawerNavigator();

function UserNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ver" component={ListUser} />
      <Drawer.Screen name="Crear" component={CreateUser} />
    </Drawer.Navigator>
  );
}

export default UserNavigator;