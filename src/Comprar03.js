import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar,SafeAreaView, ScrollView } from 'react-native'
import HomePrincipal from './HomePrincipal'
import { UserContext } from './Context/UserContext'

export default function Comprar() {
    const{setCompra03} = useContext( UserContext);
  return (
    <View style={css.caixaMairo}>

            <View style={css.caixa}>
                <Image style={css.tinyLogo} source={require("../assets/Logoconcessionaria.png")}/>
            </View>

            <View>
                <TouchableOpacity style={css.btn01} >
                    <Text onPress={ () => setCompra03( false )}  style={css.Texto}>❮</Text>
                </TouchableOpacity>
            </View>

        <SafeAreaView style={css.container}>
            <ScrollView style={css.scrollView}> 

            <View style={css.CaixaImga}>
                <Image style={css.ImageCarro} source={require("../assets/FotoCarro/GmcVermelha.png")} />
                <Text style={css.TextoCarro}>CIVIC 807</Text>
            </View>

            <View style={css.CaixaRiscoLaranja}>
                <Text style={css.TextoRiscoLaranja}>Total:</Text>
                <Text style={css.TextoPreco} > R$1000000000</Text>
            </View>
    
            <View>
               <View style={css.csixaTextoDeta}>
                    <Text style={css.textoDetalhes}>ITENS DE SÉRIE:</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >MODEL YEAR 2024</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP}>PACK SAFETY 2910</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >SERVIÇOS CONECTADOS</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Abertura remota da tampa traseira</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Acendimento automático dos faróis</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Ajuste elétrico de altura do farol</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Alças auxiliares de acesso ao veículo</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Alerta de colisão frontal com frenagem autônoma de emergência com detecção de </Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >STING GREY</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >BRANCO PEROLA</Text>
                </View>

                <View>
                    <Image  style={css.ImageDetalheCarro}  source={{uri:"https://www.webmotors.com.br/wp-content/uploads/2023/12/28173908/Honda-Civic-9a-geracao-2.webp",}} />
                </View>
                
                <View style={css.csixaTextoDeta}>
                    <Text style={css.textoDetalhes}>ITENS DE SÉRIE:</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >MODEL YEAR 2024</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP}>PACK SAFETY 2910</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >SERVIÇOS CONECTADOS</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Abertura remota da tampa traseira</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Acendimento automático dos faróis</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Ajuste elétrico de altura do farol</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Alças auxiliares de acesso ao veículo</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >Alerta de colisão frontal com frenagem autônoma de emergência com detecção de </Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >STING GREY</Text>
                    <Text style={css.TextoDetalhesDEntroCaixaP} >BRANCO PEROLA</Text>
                </View>

                <View style={css.CaixaPaiBTN}>
                    <TouchableOpacity style={css.btn02} >
                        <Text onPress={ () => setCompra( false )}  style={css.TextoBTNC}>Comprar</Text>
                    </TouchableOpacity>
                </View>

            </View>    
            </ScrollView>
        </SafeAreaView>        
    </View>
  )
}

const css = StyleSheet.create({
    caixaMairo:{
        height:"100%",
        width:"100%",
        //marginBottom:35,
        //backgroundColor:"red",
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
    image:{
        width:175,
        height: 100,
        //backgroundColor:"blue"  
    },
    Texto:{
        fontSize:20,
        marginLeft:10,
        marginTop:15,
        //backgroundColor:"red"
    },
    CaixaImga:{
        height:"30%",
        //backgroundColor:"red"
    },
    ImageCarro:{
        width:"80%",
        height:230,
        marginLeft:34,
        marginTop:-35,
    },
    TextoCarro:{
        fontSize:25,
        fontWeight:"bold",
        marginTop:25,
        marginLeft:140
    },
    CaixaRiscoLaranja:{
        borderRadius:8,
        borderWidth: 2,
        borderColor: '#C1813A',
        //backgroundColor:"red",
        width:"90%",
        height:"5%",
        marginLeft:20,
        flexDirection:"row",
        marginTop:-30,
    },
    TextoRiscoLaranja:{
        fontSize:25,
        marginLeft:10,
        marginTop:5,
    },
    TextoPreco:{
        width:"50%",
        fontSize:23,
        marginLeft:"25%",
        marginTop:5
    },
    csixaTextoDeta:{
        width:"90%",
        // backgroundColor:"red",
        marginLeft:20,
        marginTop:20,
    },
    TextoDetalhesDEntroCaixaP:{
        marginLeft:15,
    },
    ImageDetalheCarro:{
        width:"80%",
        height:190,
        marginLeft:34,
        marginTop:45,
        //backgroundColor:"red",
    },
    container: {
        flex: 1,
        width:"100%",
        height:"100%",
       // paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
         marginHorizontal: 1,
         width:"100%",
        height:"100%",
        //backgroundColor: 'pink',
         margintop:50
       
      },
      TextoCarro02:{
        marginBottom:100,
      },
      btn02:{
        marginTop:15,
        marginBottom:155,
        marginLeft:25,
        backgroundColor:"#13293D",
        width:"90%",
        height:"14%",
        borderRadius:10,
      },
      TextoBTNC:{
        color:"white",
        marginLeft:135,
        fontSize:25,
        marginTop:5,

      },
      
})  
