import React,{ useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './pages/screen1'
import Task from './pages/screen2'
import Add from './pages/screen3'

import { Provider } from 'react-redux';
import store from './reduxtoolkit/store';




//Chuyen trang
const Stack = createNativeStackNavigator();
const Navigating = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default Navigating;


