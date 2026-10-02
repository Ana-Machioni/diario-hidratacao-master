import { View, Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../constants/colors";


export function AjustarMeta({ goal, AddMeta }) {

    return (

        <View style={styles.container}>

            <Text style={styles.title} > Ajustar Meta Diária</Text>
            <Text style={styles.subtitle} > Meta Diária: {goal} ml</Text>

            <View style={styles.container}>

                <View style={styles.buttonRow}>

                    <Pressable style={styles.button} onPress={() => AddMeta(-250)}>

                        <Text> - 250 ml</Text>

                    </Pressable>

                    <Pressable style={styles.button} onPress={() => AddMeta(250)}>

                        <Text> + 250 ml</Text>

                    </Pressable>

                </View>



            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginBottom: 24,
    },

    button: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',

    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textMain,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: 16,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textMain,
        padding:5,
    },

    subtitle: {
        color: COLORS.textMuted,
        fontSize: 14,
        marginTop: 4,
    },

})