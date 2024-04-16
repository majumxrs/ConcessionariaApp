import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from "./Home";
import Login from "./Login";
import Agenda from "./Agenda";
import Local from "./Local";
import Comprar from "./Comprar";
import { UserContext } from './Context/UserContext';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const{logado} = useContext( UserContext);

    if( logado == false ) {
        return( <Login /> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'white',headerShown: false,tabBarStyle: {backgroundColor:"#13293D"}}}>
              <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),}} />
              <Tab.Screen name='Agenda' component={Agenda} options={{tabBarLabel: 'Agendar',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="calendar-blank" color={color} size={size} />),}}/>
              <Tab.Screen name='Local' component={Local} options={{tabBarLabel: 'Local',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="google-maps" color={color} size={size} />),}}/>
              <Tab.Screen name='Comprar' component={Comprar} options={{tabBarLabel: 'Carrinho',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart-outline" color={color} size={size} />),}}/>
            </Tab.Navigator>
        </NavigationContainer>
        
    );
}
