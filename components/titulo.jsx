import { Text, StyleSheet} from 'react-native'
import { colors } from '../styles/colors'


const Titulo = ({children}) => {
    return(
        <Text style={styles.titulo}>
            {children}
        </Text>
    )
};

export default Titulo;


const styles = StyleSheet.create({
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
        marginTop: 30
    }
})

