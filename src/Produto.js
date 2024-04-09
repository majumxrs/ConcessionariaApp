import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Produto({titulo , BTN02, BTN01,imagem }) {
    return(
        <View style={css.caixa}>
            <Text style={css.titulo}>{titulo}</Text>
            <Image style={css.image} source={item.imagem}/>
            <TouchableOpacity style={css.btn01} >
                <Text style={css.BTN01}>{BTN01}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btn01} >
                <Text style={css.BTN02}>{BTN02}</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet .create({
    caixa:{
        width:"100%",
        height: 210,
        backgroundColor: "#dbead5",
        //margin: 20,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    titulo: {
        fontSize: 25,
        marginBottom:-70,
        marginLeft:150,

        
    },
    BTN01:{
        marginTop:20,
        marginRight:140,
        color:"#5ccd32",
        fontSize: 20,
    },
    BTN02:{
        marginTop:-25,
        marginLeft:45,
        color:"#5ccd32",
        fontSize: 20,

    },
    image:{
        width:175,
        height: 100,
        backgroundColor:"blue",
        marginRight:180,

    },
})