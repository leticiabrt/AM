import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide3({setPageI}:IPagina) {
    const fundo3 = require('../../assets/fundo3.png')
    const img3 = require('../../assets/acessar.png')
    return (
        <ImageBackground source={fundo3} style={styleContainer.container}>
            <View style={styles.fundo}>
                <View>
                    <Image source={img3} style={styles.image}></Image>
                    <Text style={styles.texto}>ACESSAR</Text>
                </View>
                <View style={styles.botoes}>
                    <ButtonSlide onPressI={() => setPageI(1)}/>
                    <ButtonSlide onPressI={() => setPageI(2)}/>
                    <ButtonSlide onPressI={() => setPageI(3)}/>
                    <ButtonSlide onPressI={() => setPageI(4)}/>
                </View>
                
            </View>
        </ImageBackground>
    )
}