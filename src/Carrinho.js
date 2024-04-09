import { View, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import { UserContext } from './Context/UserContext'
import React, { useContext } from 'react'

export default function Comprar() {
    const{setCompra} = useContext( UserContext);
    return(
        <View style={css.caixaMairo}>
            <View style={css.caixa}>
                <Image style={css.tinyLogo} source={require("../assets/Logoconcessionaria.png")}/>
            </View>
            <SafeAreaView style={css.container}>
                <ScrollView style={css.scrollView}> 

                <View>
                    <Text>Seu Carrinho:</Text>
                </View>
                <View>
                    
                </View>

                </ScrollView>
            </SafeAreaView> 
        </View>
    );
}
const css = StyleSheet.create({
    caixaMairo:{
        height:"100%",
        width:"100%",
        //marginBottom:35,
        //backgroundColor:"red",
    },
    caixa:{
        height:"14%",
        width:"100%",
        backgroundColor:"#13293D",
        //marginLeft:150,
        
    },
    tinyLogo:{
        height:"55%",
        width:"25%",
        marginTop:29,
        marginLeft:150
    },
}) 