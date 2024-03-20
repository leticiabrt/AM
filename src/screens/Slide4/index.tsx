import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide4({setPageI}:IPagina) {
    const fundo4 = require('../../assets/fundo4.png')
    const img3 = require('../../assets/imgSl3.png')
    return (
        <ImageBackground source={fundo4} style={styleContainer.container}>
            <View style={styles.fundo}>
                <View>
                    <Image source={img3} style={styles.image}></Image>
                    <Text style={styles.texto}>FEEDBACK</Text>
                </View>
                <View style={styles.botoes}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={true}/>
                </View>
            </View>
        </ImageBackground>
    )
}