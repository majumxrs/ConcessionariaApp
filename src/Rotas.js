import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from "./Home";
import Login from "./Login";
import Agenda from "./Agenda";
import { UserContext } from './Context/UserContext';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const{logado} = useContext( UserContext);

    if( logado == false ) {
        return( <Login /> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#13293D',headerShown: false,tabBarStyle: {backgroundColor:"#13293D"}}}>
              <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),}} />
              <Tab.Screen name='Agenda' component={Agenda}/>
            </Tab.Navigator>
        </NavigationContainer>
        
    );
}
