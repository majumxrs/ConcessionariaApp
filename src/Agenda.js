import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, Platform } from "react-native";
import {useState, useEffect, useContext} from 'react';
import { UserContext } from "./Context/UserContext";
//import uuid from 'react-native-uuid';
import * as Network from 'expo-network';
import * as Calendar from 'expo-calendar';

export default function Agenda({navigation}) {

    const [ nome, setNome ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ data, setData ] = useState( "" );
    const [ horaInicio, setHoraInicio ] = useState( "" );
    const [ horaFinal, setHoraFinal ] = useState( "" );
    const [rede, setRede ] = useState( false );
    const [ dados, setDados ] =  useState([]);
    const [agenda, setAgenda ] = useState();

 async function getPermissions()
 {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    }
 }

 useEffect(() => {
  getPermissions();
 }, []);

    async function getStatus()
    {
      const status = await Network.getNetworkStateAsync();
        console.log( status );
      if( status.type == "WIFI"){
        setRede( true );
      } else{
        setRede( false );
      }
    }

    useEffect( () => {
      getStatus();
    } , [] );

    useEffect( () => {
      getStatus();
    } , [rede] );



    async function Salvar()
  {
    if(agenda != "" && data != "" && inicio != "" && encerramento != "" ){
      Keyboard.dismiss();
      const evento = {
        id: uuid.v4(),
        nome: agenda,
        data: data, 
        horaInicio: horaInicio,
        horaFinal: horaFinal
      };
      console.log(evento);
      const novoEvento = [ ...dados , evento ];
      setDados( novoEvento );
      

      const defaultCalendarSource =
      Platform.OS === 'ios'
      ? await Calendar.getDefaultCalendarAsync()
      : { isLocalAccount: true, name: 'Expo Calendar' };

      const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Expo Calendar',
        color: 'lightgreen',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
      });


      let inicioDataHora = inicio.split(" ");
      let Data = inicioDataHora[0].split("-");
      let inicioHora = inicioDataHora[1].split(".");

      let FinalDataHora = final.split(" ");
      let finalHora = FinalDataHora[1].split(".");

      const newEvent = {
        title: agenda,
        startDate: new Date(Data[2], Data[1] -1 , Data[0], inicioHora[0], inicioHora[1]),
        endDate: new Date(finalData[2], finalData[1] -1 , finalData[0], finalHora[0], finalHora[1]),
        location: "Sesi",
        notes:"Meteoro da Paixão",
      };

      try{
        await Calendar.createEventAsync(newCalendarID, newEvent);
        alert('Evento criado com sucesso!');
      } catch ( error ) {
        alert('Erro ao criar evento!');
      }

      setAgenda( "" );
      setFinal( "" );
      setInicio( "" );
    }
  }



    return(
        <View style={css.CaixaTotal}>
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View >
            <TouchableOpacity>
                <Text style={css.BTNVoltar} onPress={ () => navigation.navigate( "Home" ) }>❮</Text>
            </TouchableOpacity>  
            { rede ? 
            <View style={css.caixa2} >
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
                <TextInput style={css.input} textInput={data} value={data} onChangeText={(digitado) => setData(digitado)} keyboardType='numeric' placeholder="Data:" />
                <TextInput style={css.input} textInput={horaInicio} value={horaInicio} onChangeText={(digitado) => setHoraInicio(digitado)} keyboardType='numeric' placeholder="Horario de Inicio:" />
                <TextInput style={css.input} textInput={horaFinal} value={horaFinal} onChangeText={(digitado) => setHoraFinal(digitado)} keyboardType='numeric'  placeholder="Encerramento:" />
            </View>
            <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.Texto}>Agendar</Text>
                </TouchableOpacity>
            </View>
            : 
            <Text>Ops! Conecte-se a internet</Text>}  
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
    caixa2:{
        height:75,
        width:"90%",
        alignItems: "center"
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
        //marginLeft:10,
        fontSize:25,
        marginRight:380
    },
    nomePag: {
        marginTop:10,
        color:"black",
        fontSize:25
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
        alignItems:"center",
        width:"100%"
    },
    PaiInput: {
        display:"flex",
        width:"90%",
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
        fontWeight:"900"
      },
})