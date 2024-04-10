import { useState , useEffect  } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useBatteryLevel } from 'expo-battery';
import * as Network from 'expo-network';

export default function Produto({titulo , BTN02, BTN01,imagem }) {

    const [ bateria, setBateria] = useState();
    const [rede , setRede] = useState();
    //const{usuario} = useContext(UserProvider);
    const batteryLevel = useBatteryLevel();

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


    useEffect( () => {
        setBateria((batteryLevel * 100).toFixed(0));
    } , [batteryLevel] );

    async function getPermissions()
 {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    }
 }

  
    return(
        <View >
             { rede ? <View style={css.caixa}>
                <Image source={imagem} style={css.img}  />
                <Text style={css.titulo}>{titulo}</Text>
                {bateria >20 ? 
                    <View style={css.CaixaBTN}>
                        <TouchableOpacity style={css.btn01} >
                            <Text style={css.BTN01}>{BTN01}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.btn01} >
                            <Text style={css.BTN02}>{BTN02}</Text>
                        </TouchableOpacity>
                    </View> 
            :
                <TouchableOpacity style={css.btn01} >
                    <Text style={css.BTN02}>{BTN02}</Text>
                </TouchableOpacity>
            }
             </View> 
             :
            <View style={css.caixa} >
                <Image source={imagem} style={css.img}  />
                <Text style={css.titulo}>{titulo}</Text>
            </View>}
             
        </View>
    )
}

const css = StyleSheet .create({
    caixa:{
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    titulo: {
        fontSize: 25,
        marginLeft:150,
        marginTop:-70,
    },
    BTN01:{
        color:"#C1813A",
        fontSize: 25,
        marginTop:50,

    },
    BTN02:{
        color:"#C1813A",
        fontSize: 25,
        marginTop:50,
        marginLeft:10,
    },
    CaixaBTN:{
        display: 'flex',
        flexDirection:'row',
        //marginBottom:80,
    },
    img: {
        width:190, 
        height:120,
        //backgroundColor:"red",
        marginRight:190,
    }
})