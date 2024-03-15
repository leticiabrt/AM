import { StyleSheet } from "react-native";
import {colors} from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    ball1: {
        width: 30,
        height: 30,
        backgroundColor: colors.black,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'gray',
        marginTop: 50,
        marginLeft: 20,
        alignContent:'space-between'
    }
})