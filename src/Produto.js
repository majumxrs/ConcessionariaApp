import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useBatteryLevel } from 'expo-battery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Network from 'expo-network';
import * as Calendar from 'expo-calendar';

export default function Produto({ titulo, imagem, navigation, preco }) {

    const [bateria, setBateria] = useState();
    const [rede, setRede] = useState();
    const batteryLevel = useBatteryLevel();


    useEffect(() => {
        getPermissions();
    }, []);

    async function getStatus() {
        const status = await Network.getNetworkStateAsync();
        console.log(status);
        if (status.type == "WIFI") {
            setRede(true);
        } else {
            setRede(false);
        }
    }

    useEffect(() => {
        getStatus();
    }, []);

    useEffect(() => {
        getStatus();
    }, [rede]);


    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0));
    }, [batteryLevel]);

    async function getPermissions() {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }


    async function RedirecionaAgendamento() {

        await AsyncStorage.removeItem( "produto" );
        const produto = {
            titulo: titulo,
            imagem: imagem
        }
        await AsyncStorage.setItem( "produto", JSON.stringify( produto ) );
        navigation.navigate( "Agenda" );
    }
    async function RedirecionaComprar() {

        await AsyncStorage.removeItem( "produto" );
        const produto = {
            titulo: titulo,
            imagem: imagem,
            preco: preco
        }
        await AsyncStorage.setItem( "produto", JSON.stringify( produto ) );
        navigation.navigate( "Comprar" );
    }

    return (
        <View style={css.caixa}>
            {rede ?
                <View style={css.caixa}>
                    <Image source={imagem} style={css.img} />
                    <Text style={css.titulo}>{titulo}</Text>
                    {bateria > 20 ?
                        <View style={css.CaixaBTN}>
                            <TouchableOpacity style={css.btn01}>
                                <Text style={css.btn01} onPress={RedirecionaAgendamento}>AGENDAR  |</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={css.btn01} >
                                <Text style={css.btn02} onPress={RedirecionaComprar} >COMPRAR</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity style={css.btn01} >
                            <Text style={css.btn02}>COMPRAR</Text>
                        </TouchableOpacity>
                    }
                </View>

                :
                <View style={css.caixa}>
                    <Text style={css.tituloSemNet}>{titulo}</Text>
                    <View style={css.CaixaBTNSemNet}>
                        <TouchableOpacity style={css.btn01} >
                            <Text style={css.BTN02SemNet} onPress={RedirecionaComprar} >COMPRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

        </View>
    )

}

const css = StyleSheet.create({
    caixa: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 25,
        marginLeft: 150,
        marginTop: -70,
    },
    btn01: {
        color: "#C1813A",
        fontSize: 25,
        marginTop: 50,

    },
    btn02: {
        color: "#C1813A",
        fontSize: 25,
        marginTop: 50,
        marginLeft: 10,
    },
    CaixaBTN: {
        display: 'flex',
        flexDirection: 'row',
        //marginBottom:80,
    },
    img: {
        width: 190,
        height: 120,
        //backgroundColor:"red",
        marginRight: 190,
    },
    BTN02SemNet: {
        color: "#C1813A",
        fontSize: 25,
        marginTop: 20,
        marginLeft: 10,
    },
    tituloSemNet: {
        fontSize: 25,
    }
})