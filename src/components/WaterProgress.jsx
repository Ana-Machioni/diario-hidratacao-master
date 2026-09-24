import { Text, View } from "react-native";

export function WaterProgress({ consumido = 666, objetivo = 2000 }) {
  const porcentagem = Math.min(Math.round((consumido / objetivo) * 100), 100);

  return (
    <View>
      <Text>Você bebeu {consumido}ml de água hoje.</Text>
      <Text>Você atingiu {porcentagem}% da Meta.</Text>
      
      {/* Barra de Progresso */}
       <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${porcentagem}%` }]} />
      </View>

    </View>
  );
}
