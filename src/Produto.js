import { Image, ImageBase, StyleSheet, Text, View } from "react-native";


export default function({titulo , preco, image, }){
    return(
        <View style={css.caixaMairo} >
            <View style={css.caixa} >
                <Text style={css.titulo}>{titulo}</Text>
                <Image source={require [(image)]} />
                <Text style={css.preco}>{preco}</Text>
            </View>
        </View>
        
    )
}

const css = StyleSheet .create({
    
})