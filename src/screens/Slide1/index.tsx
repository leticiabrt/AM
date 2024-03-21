import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide1({setPageI}:IPagina) {
    const fundo1 = require('../../assets/fundo1.png')
    const img1 = require('../../assets/imgSl1.png')
    return (
        <ImageBackground source={fundo1} style={styleContainer.container}>
            <View style={styles.fundo}>
                <View style={styles.centralizar}>
                    <Image source={img1} style={styles.image}></Image>
                    <Text style={styles.texto}>NOSSO ESPAÇO</Text>
                </View>
                <View style={styles.botoes}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={false}/>
                </View>
            </View>
        </ImageBackground>
    )
}

