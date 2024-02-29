import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyles"
import {} from "../../components/ButtonSlide"

export function Slide1() {
    const fundo1 = require('../../assets/fundo1.png')
    return (
        <ImageBackground source={fundo1} style={styleContainer.container}>
            <View style={styles.fundo}>
                
            </View>
        </ImageBackground>
    )
}

