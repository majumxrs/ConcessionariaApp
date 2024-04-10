import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import Produto from '../src/Produto';


const dados =[
    {
        id: "01",
        imagem: require('../assets/FotoCarro/GmcPreta.png'),
        titulo: "GMC Preta",
        BTN01: "Agendar  |",
        BTN02: "Comprar"
    },
    {
      id: "02",
      imagem:require('../assets/FotoCarro/Civic.png'),
      titulo: "Civic",
      BTN01: "Agendar  |",
      BTN02: "Comprar"
  },
  {
    id: "03",
    imagem:require('../assets/FotoCarro/Hamer.png'),
    titulo: "Hamer",
    BTN01: "Agendar  |",
    BTN02: "Comprar"
},
{
  id: "04",
  imagem:require('../assets/FotoCarro/GmcVermelha.png'),
  titulo: "GMC",
  BTN01: "Agendar  |",
  BTN02: "Comprar"
},
{
  id: "05",
  imagem:require('../assets/FotoCarro/Ram1500Certa.png'),
  titulo: "RAM 1500",
  BTN01: "Agendar  |",
  BTN02: "Comprar"
},
{
  id: "06",
  imagem:require('../assets/FotoCarro/RamLamier.png'),
  titulo: "RamLamier",
  BTN01: "Agendar  |",
  BTN02: "Comprar"
},
{
  id: "07",
  imagem:require('../assets/FotoCarro/Cdilac.png'),
  titulo: "Cdilac",
  BTN01: "Agendar  |",
  BTN02: "Comprar"
},
{
  id: "08",
  imagem:require('../assets/FotoCarro/BYDHAN.png'),
  titulo: "BYDHAN",
  BTN01: "Agendar  |",
  BTN02: "Comprar"
},
   
]
export default function Itens()
{
    return(
        <View >
          <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <FlatList
                data={dados}
                renderItem={({item}) => (<View style={css.Caixapai}>
                  <View style={css.teste}>
                    
                    <Produto imagem={item.imagem} titulo={item.titulo} BTN01={item.BTN01} BTN02={item.BTN02} /> 
                  </View>
                  
                </View>) }
                keyExtractor={item => item.id}
                contentContainerStyle={css.conteiner}
                horizontal={false}
                
            />
        </View>
    );
}
const css = StyleSheet.create({
  conteiner:{
    width:"100%",
    display:"flex",
     // margin: 10,
     // gap: 50,
  },
  caixa:{
    height:"14%",
    width:"100%",
    backgroundColor:"#13293D",
    //marginLeft:150,  
},
tinyLogo:{
    height:"55%",
    width:"25%",
    marginTop:29,
    marginLeft:150
},
Caixapai:{
        padding: 30,
       // borderColor: "#C1813A",
        borderWidth:1,
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
},
teste: {
  display:'flex'
}
})