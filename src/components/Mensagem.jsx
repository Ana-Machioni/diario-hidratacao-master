import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";


export function Mensagem({ goal }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title} > ✨ Dica de Saúde</Text>
      <Text style={styles.subtitle} > Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textMain,
    padding: 10,
  },

  subtitle: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginTop:4,
  },

})