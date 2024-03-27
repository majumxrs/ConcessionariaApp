import { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "./Context/UserContext";

export default function Cadastro() {

    const{setCadastro} = useContext( UserContext );

    return(
        <View>
            <Text>Cadastro</Text>
            <Text onPress={ () => setCadastro( false ) }>VOLTAR</Text>
        </View>
    );
}