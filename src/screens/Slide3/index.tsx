import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide3({setPageI}:IPagina) {
    const fundo3 = require('../../assets/fundo3.png')
    return (
        <ImageBackground source={fundo3} style={styleContainer.container}>
            <View style={styles.fundo}>
                <ButtonSlide onPressI={() => setPageI(1)}/>
                <ButtonSlide onPressI={() => setPageI(2)}/>
                <ButtonSlide onPressI={() => setPageI(3)}/>
                <ButtonSlide onPressI={() => setPageI(4)}/>
            </View>
        </ImageBackground>
    )
}