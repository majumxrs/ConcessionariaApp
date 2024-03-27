import { Image, View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import {useState, useEffect} from 'react';
import React, {useContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "./Context/UserContext";

export default function Login({setLogado})
{
    const [email, setEmail ] = useState( "" );
    const [ senha, setSenha ] = useState( "" );
    const [ erro, setErro ] = useState();

    const {Login} = useContext( UserContext);

    async function VerificarLogin(){
        Keyboard.dismiss();
        Login( email, senha );
    }

    return(
        <View style={css.Tela}>
            <View style={css.LogoView}>
                <Image source={require('../assets/FotoCarro/Logoconcessionaria.png')} style={css.Logo}/>
            </View>
            { erro && <Text style={css.Erro} >Login ou Senha Incorretos</Text>}
            <View style={css.NomePagina}>
                <Text style={css.Login}>LOGIN</Text>
                <TextInput style={css.input} textInput={email} value={email} onChangeText={(digitado) => setEmail(digitado)} placeholder="Email:" />
                <TextInput style={css.input} textInput={senha} value={senha} onChangeText={(digitado) => setSenha(digitado)} placeholder="Senha:" />
                <TouchableOpacity style={css.btn} onPress={ VerificarLogin }>
                    <Text style={css.Texto}>LOGIN</Text>
                </TouchableOpacity>
                <View>
                
                </View>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    Tela: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#13293D',
        width:"100%",
        height:800,
    },
    LogoView: {
        width:"50%",
        height:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

    },
    Logo: {
        width:"120%",
        height:100,
    },
    Erro: {
        
    },
    NomePagina: {
        marginBottom:100,
        width:"90%",
        height: 350,
        borderRadius: 15,
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    },
    Login:{
        fontStyle:"italic",
        fontSize: 30,
        color: "white",
        marginTop: 90
    },
    input:{
        width:"90%",
        height: 50,
        margin:20,
        borderColor:"#C9994D",
        borderRadius:5,
        borderWidth:2,
        padding:10,
        backgroundColor: "white",
        marginTop: 20
      },
      btn:{
        width:200,
        height: 50,
        margin:20,
        borderRadius:5,
        backgroundColor:"#C9994D",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
      },
      Texto:{
        color:"white"
      }
})