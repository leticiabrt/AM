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
        marginTop: 350
    },
    image: {
        marginTop: 250,
        marginLeft: 70,
        width: 250,
        height: 180,
        borderRadius: 15,
    },
    texto: {
        fontSize: 25,
        marginLeft: 120
    }
})