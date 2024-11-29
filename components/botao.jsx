import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import { colors } from '../styles/colors'

const Botao = ({textoBotao, onpress}) => {
    return(
        <TouchableOpacity 
        style={styles.button} 
        onPress={onpress}>
            <Text style={styles.buttonText}>
                {textoBotao}
            </Text>
        </TouchableOpacity>
    )
};

export default Botao;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.verde1,
        color: "green",
        borderRadius: 5,
        marginTop: 16
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.background,
      }
})
