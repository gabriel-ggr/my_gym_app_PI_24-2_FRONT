import {Image, View, StyleSheet} from 'react-native'
import { colors } from '../styles/colors'


const Logo = () => {
    return(
        <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../assets/images/gym_logo_1.png')}/>
        </View>
    )
};

export default Logo;


const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: -32,
      },
      logoImg: {
        backgroundColor: colors.verde1,
        borderRadius: 15
      },
})

