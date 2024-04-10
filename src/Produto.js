import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Produto({titulo , BTN02, BTN01,imagem }) {
    return(
        <View style={css.caixa}>
            <Text style={css.titulo}>{titulo}</Text>
            <View style={css.CaixaBTN}>
                <TouchableOpacity style={css.btn01} >
                    <Text style={css.BTN01}>{BTN01}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn01} >
                    <Text style={css.BTN02}>{BTN02}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const css = StyleSheet .create({
    caixa:{
        width:"100%",
        //display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    titulo: {
        fontSize: 25,
        marginTop:-20,
        marginLeft:140,
    },
    BTN01:{
        color:"#5ccd32",
        fontSize: 20,
       // marginTop:80,
        marginLeft:190,
    },
    BTN02:{
        marginLeft:190,
        color:"#5ccd32",
        fontSize: 20,
    },
    CaixaBTN:{
        marginTop:100,
    }
})