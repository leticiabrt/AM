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
                <View style={styles.centralizar}>
                    <Image source={img3}></Image>
                    <Text style={styles.texto}>ACESSAR</Text>
                </View>
                <View style={styles.botoes}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={true}/>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={false}/>
                </View>
                
            </View>
        </ImageBackground>
    )
}

