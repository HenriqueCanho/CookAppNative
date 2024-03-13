// o arquivo começa com "_" pq o expo identifica que é um arquivo de configuração da navegação
import { Slot } from "expo-router";

import {
    useFonts,
    Poppins_400Regular, 
    Poppins_700Bold,
    Poppins_500Medium
}from "@expo-google-fonts/poppins"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Poppins_400Regular, 
        Poppins_700Bold,
        Poppins_500Medium,
    })

    if(!fontsLoaded){
        return
    }
    return fontsLoaded ? <Slot/> : null // isso diz: se a fonte foi carregada, mostra o slot, caso contrário nn retorna nada
}