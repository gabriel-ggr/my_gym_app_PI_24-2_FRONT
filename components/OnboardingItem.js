import { StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native'
import React from 'react'

export default function OnboardingItem({item}) {
    const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
        <View style={{flex: 0.3}}>
            <Text>Titulo aqui</Text>
            <Text>Descrição aqui</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center'
    }
})