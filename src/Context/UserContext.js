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
    const[ compra02, setCompra02 ] = useState( false );
    const[ compra03, setCompra03 ] = useState( false );
    const[ compra04, setCompra04 ] = useState( false );
    const[ compra05, setCompra05 ] = useState( false );
    const[ compra06, setCompra06 ] = useState( false );
    const[ compra07, setCompra07 ] = useState( false );
    const[ compra08, setCompra08 ] = useState( false );
  

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
        <UserContext.Provider value={ { 
            
            usuario: usuario, logado:logado, cadastro: cadastro, compra: compra, compra02:compra02, compra03:compra03, compra04:compra04, compra05:compra05 ,compra06:compra06, compra07:compra07,compra08:compra08,
            Login, infoUsuario, setCadastro, setCompra, setCompra02, setCompra03, setCompra04, setCompra05, setCompra06, setCompra07, setCompra08
            } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;