import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import OnboardingItem from './OnboardingItem'

export default Onboarding = () => {
    const treinos = [
        {
            id: 1,
            nome: "Supino",
            repeticoes: 1,
            series: 2,
            descanso: 30,
            video: "ajkisdajsdioasd"
        },
        {
            id: 2,
            nome: "Flexão",
            repeticoes: 10,
            series: 5,
            descanso: 30,
            video: "ajkisdajsdioasd"
        },
        {
            id: 3,
            nome: "Crucifixo",
            repeticoes: 20,
            series: 5,
            descanso: 30,
            video: "ajkisdajsdioasd"
        }
    ]


    return (
        <View style={styles.contaa}>
            <FlatList data={treinos} renderItem={({item}) => <OnboardingItem item={item}/>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})