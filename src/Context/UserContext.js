import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
/*USADO PARA COMPARTILHAR UMA COISA QUE É COM TODOS*/                   
export const UserContext = createContext();


function UserProvider({children})
{
    const[ usuario, setUsuario] = useState(null);
    const[ logado, setLogado ] = useState( false );
    const[ cadastro, setCadastro ] = useState( false );
    const[ compra, setCompra ] = useState( false ); 
    const[ compraFinalizada, setCompraFinalizada ] = useState( false ); 

    async function Login (email, senha )
    {
        if( email == "Marra@gmail.com" && senha == "06080611")
        {
            await AsyncStorage.setItem( "usuario" , "Maju Martins" );
            setLogado( true );
        }
    }
    async function infoUsuario()
    {
        const usuario = await AsyncStorage.getItem( "usuario" );
        if( usuario ) {
            setUsuario( usuario );
            setLogado( true );
        }
    }
    useEffect( () => {
        infoUsuario();
    }, [] );
    return(
        <UserContext.Provider value={ { usuario: usuario, logado:logado, cadastro: cadastro, compra: compra, compraFinalizada:compraFinalizada, setCompraFinalizada, Login, infoUsuario, setCadastro, setCompra, } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;