import React from 'react';
import { StatusBar } from 'react-native';
import {Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold} from '@expo-google-fonts/ubuntu';
import {AppLoading} from 'expo';


import Routes from './src/routes';

 export default function App() {

   const [fontsLoader] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if(!fontsLoader) {
    return  <AppLoading />
  }
  
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    <Routes />
    </>
  );
}


