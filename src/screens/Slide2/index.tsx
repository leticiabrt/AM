import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide2({setPageI}:IPagina) {
    const fundo2 = require('../../assets/fundo2.png')
    return (
        <ImageBackground source={fundo2} style={styleContainer.container}>
            <View style={styles.fundo}>
                <ButtonSlide onPressI={() => setPageI(1)}/>
                <ButtonSlide onPressI={() => setPageI(2)}/>
                <ButtonSlide onPressI={() => setPageI(3)}/>
                <ButtonSlide onPressI={() => setPageI(4)}/>
                <ButtonSlide onPressI={() => setPageI(5)}/>
            </View>
        </ImageBackground>
    )
}