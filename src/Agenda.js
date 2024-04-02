import { Text, View, StyleSheet, Image } from "react-native";

export default function Agenda() {
    return(
        <View style={css.CaixaTotal}>
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <Text style={css.nomePag}>Agende um Horario</Text>
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
        width:175,
        height: 100,
        //backgroundColor:"blue"
        
    },
    nomePag: {
        marginTop:25,
        color:"black",
        fontSize:25,
        fontWeight:"900",
    },
})