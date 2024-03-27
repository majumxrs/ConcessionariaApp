import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePrincipal from './src/HomePrincipal';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Tab.Screen 
            name  =" "
            component={HomePrincipal} 
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
            }}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),}}
            styles={backgroundColor="#13293D"}
          />
             
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CorTeste:{
    backgroundColor:"#13293D"
  }
});
