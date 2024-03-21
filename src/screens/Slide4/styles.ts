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
        alignItems: 'flex-end',
        marginBottom: 15
    },
    image: {
        width: 200,
        height: 200,
    },
    texto: {
        fontSize: 30,
    },
    centralizar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }

    
})