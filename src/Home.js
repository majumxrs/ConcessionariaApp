import React, { useContext } from 'react';
import { View,Text } from 'react-native';
import {UserContext} from './Context/UserContext';

export default function Home() {
    /*PEGA O USUARIO QUE ESTA NO CONTEXTO*/
    const {usuario} = useContext(UserContext);

  return (
    <View>
        <Text>Olá</Text>
        <Text>Bem Vindo: {usuario}</Text>
    </View>
  )
}
