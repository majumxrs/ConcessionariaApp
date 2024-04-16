import {useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar,SafeAreaView, ScrollView } from 'react-native';
import { UserContext } from './Context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Comprar({navigation, imagem, titulo}) {
    const { setCompra } = useContext(UserContext);
    const [produto, setProduto] = useState(null);
    
    async function getProduto() {
        const produtoData = await AsyncStorage.getItem("produto");
        if (produtoData) {
            const produtoObj = JSON.parse(produtoData);
            setProduto(produtoObj);
        }
    }

    useEffect(() => {
        getProduto();
    }, []);

    return (
        <View style={css.caixaMairo}>
            <View style={css.caixa}>
                <Image style={css.tinyLogo} source={require("../assets/Logoconcessionaria.png")} />
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={css.BTNVoltar} onPress={() => navigation.navigate("Home")}>❮</Text>
                </TouchableOpacity>  
            </View>
            <SafeAreaView style={css.container}>
                <ScrollView style={css.scrollView}> 
                    <View style={css.CaixaImga}>
                        {produto && (
                            <>
                                <Image style={css.ImageCarro} source={produto.imagem} />
                                <Text style={css.TextoCarro}>{produto.titulo}</Text>
                            </>
                        )}
                    </View>
                    <View style={css.CaixaRiscoLaranja}>
                        <Text style={css.TextoRiscoLaranja}>Total:</Text>
                        <Text style={css.TextoPreco}>R$1000000000</Text>
                    </View>
                    <View>
                        <View style={css.csixaTextoDeta}>
                            <Text style={css.textoDetalhes}>ITENS DE SÉRIE:</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>MODEL YEAR 2024</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>PACK SAFETY 2910</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>SERVIÇOS CONECTADOS</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Abertura remota da tampa traseira</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Acendimento automático dos faróis</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Ajuste elétrico de altura do farol</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Alças auxiliares de acesso ao veículo</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Alerta de colisão frontal com frenagem autônoma de emergência com detecção de </Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>STING GREY</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>BRANCO PEROLA</Text>
                        </View>
                        <View>
                            <Image style={css.ImageDetalheCarro} source={{uri: "https://www.webmotors.com.br/wp-content/uploads/2023/12/28173908/Honda-Civic-9a-geracao-2.webp"}} />
                        </View>
                        <View style={css.csixaTextoDeta}>
                            <Text style={css.textoDetalhes}>ITENS DE SÉRIE:</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>MODEL YEAR 2024</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>PACK SAFETY 2910</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>SERVIÇOS CONECTADOS</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Abertura remota da tampa traseira</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Acendimento automático dos faróis</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Ajuste elétrico de altura do farol</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Alças auxiliares de acesso ao veículo</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>Alerta de colisão frontal com frenagem autônoma de emergência com detecção de </Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>STING GREY</Text>
                            <Text style={css.TextoDetalhesDEntroCaixaP}>BRANCO PEROLA</Text>
                        </View>
                        <View style={css.CaixaPaiBTN}>
                            <TouchableOpacity style={css.btn02}>
                                <Text onPress={() => setCompra(false)} style={css.TextoBTNC}>Comprar</Text>
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
        height: "100%",
        width: "100%",
    },
    caixa:{
        height: "14%",
        width: "100%",
        backgroundColor: "#13293D",
    },
    tinyLogo:{
        height: "55%",
        width: "25%",
        marginTop: 29,
        marginLeft: 150
    },
    ImageCarro:{
        width: 350,
        height: 230,
        marginLeft: 34,
        marginTop: -35,
    },
    TextoCarro:{
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 25,
        marginLeft: 140,
        marginBottom:45,
    },
    CaixaRiscoLaranja:{
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#C1813A',
        width: "90%",
        height: "5%",
        marginLeft: 20,
        flexDirection: "row",
        marginTop: -30,
    },
    TextoRiscoLaranja:{
        fontSize: 25,
        marginLeft: 10,
        marginTop: 5,
    },
    TextoPreco:{
        width: "50%",
        fontSize: 23,
        marginLeft: "25%",
        marginTop: 5
    },
    csixaTextoDeta:{
        width: "90%",
        marginLeft: 20,
        marginTop: 20,
    },
    TextoDetalhesDEntroCaixaP:{
        marginLeft: 15,
    },
    ImageDetalheCarro:{
        width: "80%",
        height: 190,
        marginLeft: 34,
        marginTop: 45,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    scrollView: {
        marginHorizontal: 1,
        width: "100%",
        height: "100%",
    },
    btn02:{
        marginTop: 15,
        marginBottom: 155,
        marginLeft: 25,
        backgroundColor: "#13293D",
        width: "90%",
        height: "14%",
        borderRadius: 10,
    },
    TextoBTNC:{
        color: "white",
        marginLeft: 135,
        fontSize: 25,
        marginTop: 5,
    },
    BTNVoltar:{
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10,
    },
});
