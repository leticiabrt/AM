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
        marginTop: 220
    },
    image: {
        marginTop: 90,
        marginLeft: 50,
        width: 300,
        height: 500,
        borderRadius: 15,
    },
    

    
})