import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        backgroundColor: colors.whiteBackground,
        
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 390
    },
    image: {
        marginTop: 90,
        marginLeft: 90,
        width: 200,
        height: 300,
    },
    texto: {
        fontSize: 30,
        marginLeft: 130, 
    }
    

    
})