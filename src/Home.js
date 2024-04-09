import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import Produto from '../src/Produto';


const dados =[
    {
        id: "01",
        imagem: require('../assets/FotoCarro/GmcPreta.png'),
        titulo: "GMC Preta",
        BTN01: "Comprar",
        BTN02: "|  Agendar"
    },
    {
      id: "02",
      imagem:'../assets/FotoCarro/Civic.png',
      titulo: "Civic",
      BTN01: "Comprar",
      BTN02: "|  Agendar"
  },
  {
    id: "03",
    imagem:'../assets/FotoCarro/Hamer.png',
    titulo: "Hamer",
    BTN01: "Comprar",
    BTN02: "|  Agendar"
},
{
  id: "04",
  imagem:'../assets/FotoCarro/GmcVermelha.png',
  titulo: "GMC",
  BTN01: "Comprar",
  BTN02: "|  Agendar"
},
{
  id: "05",
  imagem:'../assets/FotoCarro/Ram1500Certa.png',
  titulo: "RAM 1500",
  BTN01: "Comprar",
  BTN02: "|  Agendar"
},
{
  id: "06",
  imagem:'../assets/FotoCarro/Ram1500Certa.png',
  titulo: "RAM 1500",
  BTN01: "Comprar",
  BTN02: "|  Agendar"
},
{
  id: "07",
  imagem:'../assets/FotoCarro/Ram1500Certa.png',
  titulo: "RAM 1500",
  BTN01: "Comprar",
  BTN02: "|  Agendar"
},
{
  id: "08",
  imagem:'../assets/FotoCarro/Ram1500Certa.png',
  titulo: "RAM 1500",
  BTN01: "Comprar",
  BTN02: "|  Agendar"
},
   
]
export default function Itens()
{
    return(
        <View style={css.conteiner}>
          <View style={css.caixa}>
                <Image
                    style={css.tinyLogo}
                    source={require("../assets/Logoconcessionaria.png")}
                />
            </View>
            <FlatList
                data={dados}
                renderItem={({item}) => (<View>
                  <Image source={item.imagem} style={{width:200, height:200}}  />
                </View>) 
                /*<Produto titulo={item.titulo} BTN01={item.BTN01} BTN02={item.BTN02}  image={{ item.image}} />*/}
                keyExtractor={item => item.id}
                contentContainerStyle={css.conteiner}
                horizontal={false}
                numColumns={2}
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
})