import api from "./api";
import AsyncStorage from '@react-native-async-storage/async-storage';


// Função para login
export const login = async (email, senha, role) => {
    console.log('Login iniciado')
    try {
        console.log('quase no login')
        const response = await api.post('/login', {email, senha, role})
        const { token, user } = response.data;

        // Armazena o token no AsyncStorage
        await AsyncStorage.setItem('@auth_token', token);
        return {token, user};
    } catch (error) {
        throw new Error(error.message || 'Erro ao fazer o login'); 
    }
};


export const criarAluno = async (nome, email, senha, academia_id) => {
    console.log('Cadastro iniciado')
    try {
        const response = await api.post('/criarAluno', {nome, email, senha, academia_id});

        return console.log(response.data)
    } catch (error) {
        throw new Error(error.message || 'Erro ao criar o aluno')
    }
}
