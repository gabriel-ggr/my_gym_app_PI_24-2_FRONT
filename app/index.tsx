import React from 'react';
import { UserProvider, UserContext, useUser } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'
import Login from './login';
import Home from './home/index';
import Cadastro from './cadastro';
import { Redirect, useRouter } from 'expo-router';

const Stack = createNativeStackNavigator();


const router = useRouter();

export default function App() {
  const {user} = useUser();

  if (!user) {
    return <Redirect href='/login' />;
  }
  else {
    return <Redirect href='/home' />;
  }
  // return (
    // <UserProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Home" component={Home} />
    //       <Stack.Screen name="Cadastro" component={Cadastro} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </UserProvider>
  // );
}
