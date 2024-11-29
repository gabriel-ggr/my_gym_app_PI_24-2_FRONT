import api from './api'

export const exerciciosDoTreino = async (id, token) => {
    // console.log('Consulta a academias iniciado');
    try {
        const response = await api.get(`/exerciciosDoTreino/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;

    } catch (error) {
        console.error('Erro ao consultar exercicios do treino:', error.message);
        throw new Error(error.message || 'Erro ao consultar exercicios do treino');
    }
};
