import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={css.CaixaPai}>
         <View style={css.caixa}>
            <Image
                style={css.tinyLogo}
                source={require("../assets/Logoconcessionaria.png")}
            />
        </View>
        <View>
            <Text style={css.texto}>Nossa Localização:</Text>
        </View>
        <View>
            <Image style={css.img}   source={{
          uri: 'https://outraspalavras.net/wp-content/uploads/2020/08/mapa1.png',
        }}/>
        </View>
    </View>
  );
}
const css = StyleSheet.create({
  caixa:{
    height:95,
    width:"100%",
    backgroundColor:"#13293D",
    display:"flex",
     alignItems:"center"
  },
  tinyLogo:{
    height:"55%",
    width:"25%",
    marginTop:29,

  },
  CaixaPai:{
    width:"100%",
    height:"100%",
    backgroundColor:"red",
    backgroundColor:"#1E3952",
    display:"flex",
    alignItems:"center"
  },
  img:{
    width: 370,
    height: 600,
    backgroundColor:"red",
    marginTop:15,
  },
  texto:{
    fontSize:25,
    color:"white",
    marginTop: 15
  }
  })