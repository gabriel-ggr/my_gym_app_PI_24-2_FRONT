import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { UserContext } from "../contexts/UserContext.js"
import Entypo from '@expo/vector-icons/Entypo';
import {colors} from "../styles/colors.jsx"
import Titulo from "../components/titulo.jsx"
import { useUser } from '../contexts/UserContext.js';
import BotaoTreino from "../components/botaoTreino.jsx"
import Card from '../components/card.jsx';
import { consultarTreinos, consultarUltimoTreino } from '../api/alunoService.js';
import { format } from 'date-fns'


export default function Home() {
    
    const { user, token } = useUser();
    const [treinos, setTreinos] = useState([]);
    const [ultimoTreino, setUltimoTreino] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingUltimoTreino, setLoadingUltimoTreino] = useState(true)

    console.log("User context no home: ", user, token);

    useEffect(() => {
        const carregarTreinos = async () => {
            try {
                setLoading(true);
                const listaTreinos = await consultarTreinos(user.id, token);
                setTreinos(listaTreinos);
                console.log(listaTreinos)

            } catch (error) {
                console.error('Erro ao carregar os treinos: ', error.message);
            } finally {
                setLoading(false)
            }
        };

        const carregarUltimoTreino = async () => {
            try {
                setLoadingUltimoTreino(true);
                const treino = await consultarUltimoTreino(user.id, token);

                console.log("resposta da API para último treino: ", treino);

                const ultimoTreino = {
                    id: treino.id,
                    nome: treino.treinos?.nome || "Treino sem nome",
                    data: treino.data_treino ? format(new Date(treino.data_treino), 'dd/MM/yyyy') : "Sem data"
                };
                
                setUltimoTreino(ultimoTreino);
                console.log(ultimoTreino);

            } catch (error) {
                console.error('Erro ao consultar ultimo treino', error.message);
            } finally {
                setLoadingUltimoTreino(false)
            }
        }

        if (user && token) {
            carregarTreinos();
            carregarUltimoTreino();
        }
    }, [user, token]);

    if (!user || !user.nome) { 
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.verde2} />
                <Text>Carregando usuários</Text>
            </View>
        )
    }

    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Carregando...</Text>
          </View>
        );
    }

    return (
    <ScrollView style={styles.container}>
        <View style={styles.containerBoasVindas}>
            {user && user.nome ? (
                <>
                <Titulo>Olá, {user.nome}</Titulo>
                <Text style={styles.text}>Bora começar o treino?</Text>
                </>
            ) : (
                <ActivityIndicator size="large" color={colors.verde2} />
            )}
        </View>

        {/* Cards Dinâmicos conforme treinos do aluno  */}
        {treinos.map((treino) => (
            <Card 
                key={treino.id}
                texto={treino.nome}
                textoBotao="COMEÇAR"
                onPress={ () => console.log("Iniciando treino, lets go!!!")}
            />
        ))}

        <View style={styles.line}/>

        <Text style={styles.text2}>Último treino realizado</Text>
        {loadingUltimoTreino ? (
            <ActivityIndicator size="large" color={colors.verde2} />
        ) : (
            ultimoTreino ? (
                <Card
                    texto={ultimoTreino.nome}
                    textoBotao={ultimoTreino.data}
                    onPress={() => console.log(`Detalhes do ultimo treino: ${ultimoTreino}`)}
                />
            ) : (
                <Text style={styles.text}>Nenhum treino encontrado</Text>
            )
        )}
        
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    containerBoasVindas: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 30
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    line: {
        borderBottomColor: colors.verde2,
        borderBottomWidth: 5,
        borderRadius: 5,
        marginTop: 30,
        margin: 15
    },
    text2: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 15,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    loadingText: {
        color: 'white',
        size: 24
    }
})