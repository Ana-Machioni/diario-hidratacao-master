import { View, Text, StyleSheet, Pressable} from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons() {
    return (
        <View>

        <Text style={styles.text}>Adicionar Consumo</Text>

        <View>
        <Button style={styles.button}>+200 ml</Button>
        <Button style={styles.button}>+350 ml</Button>
        <Button style={styles.button}>+500 ml</Button>
        </View>

        <View>
        <Button style={styles.resetButton}>Resetar Dia</Button>
        </View>

        </View>

    );

    
}
