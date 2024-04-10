import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Produto({titulo , BTN02, BTN01,imagem }) {
    return(
        <View style={css.caixa}>
            <Image source={imagem} style={css.img}  />
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