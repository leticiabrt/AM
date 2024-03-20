import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App"

export function Slide2({setPageI}:IPagina) {
    const fundo2 = require('../../assets/fundo2.png')
    const img2 = require('../../assets/imgSl2.png')
    return (
        <ImageBackground source={fundo2} style={styleContainer.container}>
            <View style={styles.fundo}>
                <View>
                    <Image source={img2} style={styles.image}></Image>
                </View>
                <View style={styles.botoes}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={false}/>

                </View>
                
            </View>
        </ImageBackground>
    )
}