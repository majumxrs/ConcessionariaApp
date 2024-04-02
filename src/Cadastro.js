import { useContext } from "react";
import { View, Text,StyleSheet, Image, TextInput,  SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { UserContext } from "./Context/UserContext"; 
import {useState, useEffect} from 'react';
//import React, {useContext} from 'react';

export default function Cadastro() {

    const{setCadastro} = useContext( UserContext );
    const [ nome, setNome ] = useState( "" );
    const [ datanasc, setDataNasc ] = useState( "" );
    const [ cpf, setCPF ] = useState( "" );
    const [ tel, setTel ] = useState( "" );
    const [ endereco, seEndereco ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ senha, setSenha ] = useState( "" );
    const [ confsenha, setConfSenha ] = useState( "" );
    const [ erro, setErro ] = useState();

    return(
        <View style={css.CaixaTotal}>   
          <SafeAreaView>
            <ScrollView>        
                    <View style={css.caixa}>
                        <Image
                            style={css.tinyLogo}
                            source={require("../assets/Logoconcessionaria.png")}
                        />
                    </View>  
                    <TouchableOpacity>
                        <Text style={css.BTNVoltar} onPress={ () => setCadastro( false )}>❮</Text> 
                    </TouchableOpacity>        
                   <View style={css.PaiCadastrar}>
                    <Text style={css.nomePag}>Cadastrar-se</Text>
                   </View>
                    <View style={css.PaiImagens}>
                        <Image source={require('../assets/FotoCarro/FacebookPreto.png')} style={css.Face}/>
                        <Image source={require('../assets/FotoCarro/google.png')} style={css.Gogle}/>
                        <Image source={require('../assets/FotoCarro/XPreto.png')} style={css.x}/>
                    </View>
                    <View style={css.PaiOu}>
                        <Text style={css.ou}>Ou</Text>
                    </View>
                    <View style={css.PaiInput}>
                        <TextInput style={css.input} textInput={nome} value={nome} onChangeText={(digitado) => setNome(digitado)} placeholder="Nome Completo:" />
                        <TextInput style={css.input} textInput={datanasc} value={datanasc} onChangeText={(digitado) => setDataNasc(digitado)} placeholder="Data de Nascimento:" />
                        <TextInput style={css.input} textInput={cpf} value={cpf} onChangeText={(digitado) => setCPF(digitado)} placeholder="CPF:" />
                        <TextInput style={css.input} textInput={tel} value={tel} onChangeText={(digitado) => setTel(digitado)} placeholder="Telefone:" />
                        <TextInput style={css.input} textInput={endereco} value={endereco} onChangeText={(digitado) => seEndereco(digitado)} placeholder="Endereço:" />
                        <TextInput style={css.input} textInput={email} value={email} onChangeText={(digitado) => setEmail(digitado)} placeholder="Email:" />
                        <TextInput style={css.input} textInput={senha} value={senha} onChangeText={(digitado) => setSenha(digitado)} placeholder="Senha:" />
                        <TextInput style={css.input} textInput={confsenha} value={confsenha} onChangeText={(digitado) => setConfSenha(digitado)} placeholder="Confirme sua Senha:" />
                    </View>
                    <View style={css.PaiCadastrar}>
                        <TouchableOpacity style={css.btn}>
                            <Text style={css.Texto}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>                   
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const css = StyleSheet .create({
    // CaixaTotal: {
    //     display:"flex",
    //     alignItems:"center",
    //     ustifyContent:"center"
    // },
    caixa:{
        height:75,
        width:"100%",
        backgroundColor:"#13293D",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        
    },
    tinyLogo:{
        height:60,
        width:"25%",
        marginTop:15,
    },
    image:{
        width:175,
        height: 100,
        //backgroundColor:"blue"
        
    },
    BTNVoltar:{ 
        marginLeft:10,
        fontSize:25
    },
    PaiCadastrar: {
        display:"flex",
        //justifyContent:"center",
        alignItems:"center"
    },
    nomePag: {
        marginTop:25,
        color:"black",
        fontSize:25,
        fontWeight:"900",
    },
    PaiImagens: {
        display:"flex",
        //alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        marginTop: 20
    },
    Gogle: {
        marginRight:30,
    },
    Face: {
        width:60,
        height:70,
        marginRight:30,
        marginTop:-5,
    },
    x: {
        width:60,
        height:70
    },
    PaiOu: {
        display:"flex",
        alignItems:"center",
    },
    ou: {
        color:"black",
        fontSize:20,
        fontWeight:"800",
        marginTop: 20,
    },
    PaiInput: {
        display:"flex",
        alignItems:"center"
    },
    input:{
        width:"80%",
        height: 50,
        margin:20,
        borderColor:"#C9994D",
        borderRadius:15,
        borderWidth:2,
        padding:10,
        backgroundColor: "white",
        marginTop: 10
    },
      NomePagina: {
        marginBottom:100,
        width:"100%",
        height: 350,
    },
    container: {
        width:"100%",  
        paddingTop: StatusBar.currentHeight,      
    },
    scrollView: {
        width:"100%",
    },
    btn:{
        width:200,
        height: 50,
        margin:20,
        borderRadius:10,
        backgroundColor:"#13293D",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
      },
      Texto:{
        color:"white",
        fontSize:30,
        fontWeight:"850"
      },

})