import { useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { UserContext } from "./Context/UserContext";

export default function CompraFinalizada()
{

    const { setCompraFinalizada } = useContext( UserContext );

    return(
        <View>
            <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                 />
            </View> 
            <TouchableOpacity>
                <Text style={css.BTNVoltar} onPress={ () => setCompraFinalizada( false )}>❮</Text> 
            </TouchableOpacity> 
            <View style={css.CaixaPrin}>
                <Image
                    style={css.ImgCompra}
                    source={require("../assets/FotoCarro/CompraFinalizada.png")}
                />
                <Text style={css.Text}>Agradecemos à sua preferencia</Text>
            </View>

        </View>
    );
}

const css = StyleSheet.create({
    CaixaPrin:{
        display:"flex",
        alignItems:"center",
        marginTop:180
    },
    caixa:{
        height:95,
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
    BTNVoltar:{ 
        marginLeft:10,
        fontSize:25
    },
    ImgCompra:{
        height:200
    },
    Text:{
        marginTop:-60,
        fontWeight:"800",
        fontSize:20
    },
})