import { Image, View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import {useState, useEffect} from 'react';
import React, {useContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "./Context/UserContext";
import Cadastro from "./Cadastro";

export default function Login({setLogado})
{
    const [email, setEmail ] = useState( "" );
    const [ senha, setSenha ] = useState( "" );
    const [ erro, setErro ] = useState();

    const {Login, cadastro, setCadastro} = useContext( UserContext);

    async function VerificarLogin(){
        Keyboard.dismiss();
        Login( email, senha );
    }

    if( cadastro ) {
        return( <Cadastro /> )
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
                    <Text style={css.Texto}>ENTRAR</Text>
                </TouchableOpacity>
                <View style={css.PaiEscrita}>
                    <Text style={css.ainda}>Ainda nao tem uma conta?</Text>
                    <Text onPress={() => setCadastro( true ) } style={css.cadastro}>Cadastre-se</Text>
                </View>
                <View>
                    <Text style={css.ou}>Ou</Text>
                </View>
                <View style={css.PaiImagens}>
                    <Image source={require('../assets/FotoCarro/google (1).png')} style={css.Gogle}/>
                    <Image source={require('../assets/FotoCarro/facebook.png')} style={css.Face}/>
                    <Image source={require('../assets/FotoCarro/twitter.png')} style={css.x}/>
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
        fontSize: 30,
        color: "white",
        marginTop: 200,
        fontWeight:"900"
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
        color:"black",
        fontSize:35,
        fontWeight:"900"
      },
      PaiEscrita:{
        display: "flex",
        flexDirection:"row",
      },
      ainda: {
        color:"white",
        fontSize:13,
        fontWeight:"800"
      },
      cadastro: {
        color:"#C9994D",
        fontSize:13,
        fontWeight:"800"
      },
      ou: {
        color:"white",
        fontSize:20,
        fontWeight:"800"
      },
      PaiImagens: {
        display:"flex",
        flexDirection:"row",
        marginTop: 20
      },
      Gogle: {
        marginRight:30
      }

})