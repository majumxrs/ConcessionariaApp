import { Image, StyleSheet, Text, View } from "react-native";


export default function({titulo , preco, image, }){
    return(
        <View style={css.caixaMairo} >
            <View style={css.caixa} >
                <Text style={css.titulo}>{titulo}</Text>
                <Image style={css.image} source={{ uri: image, }} />
                <Text style={css.preco}>{preco}</Text>
            </View>
        </View>
        
    )
}

const css = StyleSheet .create({
    image:{
        width:200,
        height: 100,
        marginLeft: 15
    },
    caixaMairo:{
        width:"90%",
        height:"100%",
        backgroundColor:"red",
        marginLeft:15
    }
})