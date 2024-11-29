import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Onboarding from "../../components/Onboarding";
import { useUser } from '../../contexts/UserContext.js';
import { exerciciosDoTreino } from "../../api/treinoService";
import { styles } from "../../styles/treinoStyles.js";
import { useForm, Controller } from 'react-hook-form';
import Botao from '../../components/botao.jsx'



export default function Treino() {

    const { control, handleSubmit }  = useForm()
    const { treino_id } = useLocalSearchParams();
    const { token } = useUser();
    const [exercicios, setExercicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [exerciciosConcluidos, setExerciciosConcluidos] = useState([]);

    const [pesos, setPesos] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    // console.log("Esse é o meu treino_id >>>>>> " + treino_id)

    useEffect( () => {
        const carregarExercicios = async() => {
            try {
                const data = await exerciciosDoTreino(treino_id, token)
                setExercicios(data);
            } catch (error) {
                console.error("Erro ao carregar exercicios: ", error);
            } finally {
                setLoading(false);
            }
        };
        if (treino_id){
            carregarExercicios();
        }
    }, [treino_id, token] )

    // const finalizarExercicio = (id) => {
    //     setExerciciosConcluidos((prev) => [...prev, id]); // Marcar o exercícios como concluído
    // }

    if (loading) {
        return (
            <View>
                <Text style={{color: 'white'}}>Carregando Exercícios...</Text>
            </View>
        )
    }

    const renderExercicio = ({ item, index }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.exercicios.nome}</Text>
            <Image source={require('../../assets/images/treino_1.jpg')} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText1}>Repetições</Text>
                    <Text style={styles.infoText2}>{item.repeticoes}</Text>
                </View>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText1}>Séries</Text>
                    <Text style={styles.infoText2}>{item.series}</Text>
                </View>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText1}>Descanso</Text>
                    <Text style={styles.infoText2}>{item.descanso} s</Text>
                </View>
            </View>
            <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText1}>Observações: batatinha quando nasce</Text>
            </View>
            <View style={styles.cardPesoBotao}>
                <Controller 
                    control={control}
                    name="peso"
                    defaultValue={0}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        style={[styles.inputPeso]}
                        placeholder="Peso"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                        />
                    )}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => console.log('Exercicio finalizado')}
                >
                    <Text style={styles.buttonText}>FINALIZAR</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
      );

    return (
        <View style={styles.container}>
            <FlatList 
            data={exercicios}
            renderItem={renderExercicio}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            bounces={false}
            onMomentumScrollEnd={(e) => {
                const index = Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
                setCurrentIndex(index);
            }}
            />
            <Text style={styles.counter}>
            </Text>

        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#111",
//         padding: 20,
//     },
//     card: {
        
//         width: 300,
//         backgroundColor: "#222",
//         borderRadius: 10,
//         padding: 20,
//         marginRight: 10,
//         alignItems: "center",
//     },
//     title: {
//         color: "#fff",
//         fontSize: 18,
//         fontWeight: "bold",
//         marginBottom: 10,
//     },
//     image: {
//         width: 280,
//         height: 250,
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     detail: {
//         color: "#ccc",
//         fontSize: 14,
//         marginBottom: 5,
//     },
//     input: {
//         backgroundColor: "#333",
//         color: "#fff",
//         borderRadius: 5,
//         padding: 10,
//         marginVertical: 10,
//         width: "100%",
//         textAlign: "center",
//     },
//     counter: {
//         color: "#fff",
//         marginTop: 10,
//         fontSize: 16,
//         textAlign: "center",
//     },
//     teste1: {
//         flex: 1,

//     }
// });
