import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import Produto from '../src/Produto';


const dados =[
{
  id: "01",
  imagem: require('../assets/FotoCarro/GmcPreta.png'),
  titulo: "GMC Preta",
  preco:"10202"
},
{
  id: "02",
  imagem:require('../assets/FotoCarro/Civic.png'),
  titulo: "Civic",
  preco:"2015"
},
{
  id: "03",
  imagem: require('../assets/FotoCarro/Hamer.png'),
  titulo: "Hamer",
  preco:"8500888"
},
{
  id: "04",
  imagem:require('../assets/FotoCarro/GmcVermelha.png'),
  titulo: "GMC",
  preco:"45002"
},
{
  id: "05",
  imagem:require('../assets/FotoCarro/Ram1500Certa.png'),
  titulo: "RAM 1500",
  preco:"25008"
},
{
  id: "06",
  imagem:require('../assets/FotoCarro/RamLamier.png'),
  titulo: "RamLamier",
  preco:"98205"
},
{
  id: "07",
  imagem:require('../assets/FotoCarro/Cdilac.png'),
  titulo: "Cdilac",
  preco:"950626"
},
{
  id: "08",
  imagem:require('../assets/FotoCarro/BYDHAN.png'),
  titulo: "BYDHAN",
  preco:"989590"
},
   
]

export default function Itens({navigation})
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
        renderItem={({item}) => (
          <View style={css.Caixapai}>
            <View style={css.teste}>
              <Produto imagem={item.imagem} titulo={item.titulo} navigation={navigation}  /> 
            </View>
          </View>
        )}
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
  },
  caixa:{
    height:"14%",
    width:"100%",
    backgroundColor:"#13293D", 
  },
  tinyLogo:{
    height:"55%",
    width:"25%",
    marginTop:29,
    marginLeft:150
  },
  Caixapai:{
    padding: 30,
    borderWidth:1,
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
  },
  teste: {
    display:'flex'
  }
})