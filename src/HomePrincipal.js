import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";

import Produto from "./Produto";

export default function(){
    return(
        <View  style={css.caixaPai} >
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <SafeAreaView style={css.container}>
            <ScrollView style={css.scrollView}>

            <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/GmcPreta.png")} />
                    <Text style={css.titulo}>Gmc Preta</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>
            
          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Civic.png")} />
                    <Text style={css.titulo}>Civic</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>

          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/GmcVermelha.png")} />
                    <Text style={css.titulo}>Gmc Vermelha</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>

          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Hamer.png")} />
                    <Text style={css.titulo}>Hamer</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>

          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Hamer.png")} />
                    <Text style={css.titulo}>Hamer</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>
          
          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Hamer.png")} />
                    <Text style={css.titulo}>Hamer</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>

          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Hamer.png")} />
                    <Text style={css.titulo}>Hamer</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>

          <View style={css.caixaMairo}>
                <View style={css.CaixaDaMaju}>
                    <Image style={css.image} source={require("../assets/FotoCarro/Hamer.png")} />
                    <Text style={css.titulo}>Hamer</Text>
                </View>
                <View style={css.CaixaPaiBTN} >
                    <TouchableOpacity style={css.btn01} >
                        <Text style={css.Texto}>Teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn02} >
                        <Text style={css.Texto}> |   TEste</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.hr}> 
                       
                </View>
          </View>
          </ScrollView>
    </SafeAreaView>
            
        </View>
    )
}

const css = StyleSheet .create({
    CaixaDaMaju:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
       // justifyContent:"center"
    },  
    caixa:{
        height:"14%",
        width:"100%",
        backgroundColor:"#13293D",
        //marginLeft:150,
        
    },
    caixaPai:{
        height:"100%",
        //display:"flex",
        width:"100%",
        //backgroundColor:"blue"
    },
    tinyLogo:{
        height:"55%",
        width:"25%",
        marginTop:29,
        marginLeft:150
    },
    image:{
        width:175,
        height: 100,
        //backgroundColor:"blue"
        
    },
    caixaMairo:{
        width:"100%",
        //backgroundColor:"red",
      
    },
    Texto:{
        color:"#C1813A",
        fontSize:25
    },
    titulo:{
        // backgroundColor:"blue",
        fontSize:25,
        marginLeft:35,
    },
    btn02:{
        marginLeft: 20,
    },
    CaixaPaiBTN:{
        display:"flex",
       //alignItems:"baseline"
       flexDirection:"row",
        justifyContent:"center"
    },
    hr:{
        width:500,
        height:2,
        backgroundColor:"black",
        marginTop:8,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 20,
      },
})