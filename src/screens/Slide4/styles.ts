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
        marginTop: 430
    },
    image: {
        marginTop: 150,
        marginLeft: 90,
        width: 200,
        height: 200,
    },
    texto: {
        fontSize: 30,
        marginLeft: 130, 
    }

    
})