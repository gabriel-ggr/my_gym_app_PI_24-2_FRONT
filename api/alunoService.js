import api from './api'

export const consultarTreinos = async (id, token) => {

    try {
        console.log("Chegou aqui")
        const response = await api.get(`/consultarTreinosAluno/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao consulta os treinos: ', error.message);
        throw new Error('Erro ao consulta os treinos do aluno');
    }
}

export const consultarUltimoTreino = async (id, token) => {
    try {
        console.log("Iniciando consulta ao último treino");
        const response = await api.get(`/consultarUltimoTreino/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        return response.data
        // Vai retornar um objeto com um treino
    } catch (error) {
        console.error("Erro ao consultar último treino ", error.message);
        throw new Error('Erro ao consulta último treino do aluno')
    }
}