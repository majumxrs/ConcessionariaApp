import { View, Image, StyleSheet } from "react-native";

export default function CompraFinalizada()
{

    const { setCompraFinalizada } = useContext( UserContext);

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
            <Image
                style={css.tinyLogo}
                source={require("../assets/FotoCarro/CompraFinalizada.png")}
            />
        </View>
    );
}

const css = StyleSheet.create({
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
    BTNVoltar:{ 
        marginLeft:10,
        fontSize:25
    },
})