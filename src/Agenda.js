import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import {useState, useEffect, useContext} from 'react';
import { UserContext } from "./Context/UserContext";
import HomePrincipal from "./HomePrincipal";

export default function Agenda() {

    const [ nome, setNome ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ data, setData ] = useState( "" );
    const [ horaInicio, setHoraInicio ] = useState( "" );
    const [ horaFinal, setHoraFinal ] = useState( "" );

    return(
        <View style={css.CaixaTotal}>
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <TouchableOpacity>
                <Text style={css.BTNVoltar} onPress={ () => setAgendar( false )}>❮</Text> 
            </TouchableOpacity>  
            <Text style={css.nomePag}>Agende um Horario</Text>
            <View style={css.CaixaDaMaju}>
                <Image style={css.image} source={require("../assets/FotoCarro/GmcPreta.png")} />
            </View>
            <View>
            <Text style={css.nomeCarro}>Sierra Heavy Duty</Text>
            </View>
            <View style={css.PaiInput}>
                <TextInput style={css.input} textInput={nome} value={nome} onChangeText={(digitado) => setNome(digitado)} placeholder="Nome Completo:" />
                <TextInput style={css.input} textInput={email} value={email} onChangeText={(digitado) => setEmail(digitado)} placeholder="Email:" />
                <TextInput style={css.input} textInput={data} value={data} onChangeText={(digitado) => setData(digitado)} placeholder="Data:" />
                <TextInput style={css.input} textInput={horaInicio} value={horaInicio} onChangeText={(digitado) => setHoraInicio(digitado)} placeholder="Horario de Inicio:" />
                <TextInput style={css.input} textInput={horaFinal} value={horaInicio} onChangeText={(digitado) => setHoraFinal(digitado)} placeholder="Encerramento:" />
            </View>
            <TouchableOpacity style={css.btn}>
                    <Text style={css.Texto}>Agendar</Text>
                </TouchableOpacity>
        </View>
    );
}


const css = StyleSheet .create({
    CaixaTotal: {
        display:"flex",
        alignItems:"center",
    },
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
        width:200,
        height: 150,
        //backgroundColor:"blue"
        
    },
    BTNVoltar:{ 
        marginLeft:10,
        fontSize:25,
        marginRight:360
    },
    nomePag: {
        marginTop:10,
        color:"black",
        fontSize:25,
        fontWeight:"900",
    },
    nomeCarro:{
        marginTop:10,
        color:"black",
        fontSize:20,
        fontWeight:"900",
    },
    CaixaDaMaju:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
       // justifyContent:"center"
    },
    PaiInput: {
        display:"flex",
        alignItems:"center"
    },
    PaiInput: {
        display:"flex",
        width:"80%",
        alignItems:"center"
    },
    input:{
        width:"100%",
        height: 50,
        margin:10,
        borderColor:"#C9994D",
        borderRadius:15,
        borderWidth:2,
        padding:10,
        backgroundColor: "white",
        marginTop: 20
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