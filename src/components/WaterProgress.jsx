import {View, Text} from "react-native";

export function WaterProgress( {consumido=666, objetivo=2000} ){

const porcentagem = Math.round((consumido/objetivo)*100)

    return(
        <View>
            <Text>Você bebeu 200ml de água hoje.</Text>
            <Text>Você atingiu {porcentagem}% da meta</Text>
            {/* barra azul */}
            <View>
                <View />
            </View>
        </View>
    )
}