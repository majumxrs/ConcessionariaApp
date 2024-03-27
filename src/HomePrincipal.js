import { useState } from "react";
import { Image, StyleSheet, FlatList, View } from "react-native";

import Produto from "./Produto";

const dados =[
    {id: "01",
    titulo: "RAM 1500 LIMITED",
    image: " ../assets/Logoconcessionaria.png",
    preco: "R$: 529.990"},
]

export default function(){
    return(
        <View  style={css.caixaPai} >
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <FlatList
                data={dados}
                renderItem={({item}) => <Produto titulo={item.titulo} preco={item.preco} image={item.image} />}
                keyExtractor={item => item.id}
                contentContainerStyle={css.caixaFlatList}
                horizontal={false}
              
            />
        </View>
    )
}

const css = StyleSheet .create({
    caixa:{
        height:"14%",
        width:"100%",
        backgroundColor:"#13293D",
        //marginLeft:150,
        
    },
    caixaPai:{
        height:"100%",
        
        width:"100%",
        //backgroundColor:"blue"
    },
    tinyLogo:{
        height:"55%",
        width:"25%",
        marginTop:29,
        marginLeft:150
    }
})