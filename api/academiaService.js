import api from './api'

export const consultarAcademias = async () => {
    // console.log('Consulta a academias iniciado');
    try {
        const response = await api.get('/consultarAcademias');
        // console.log('Resposta da API:', response.data); // Log da resposta da API
        return response.data;
    } catch (error) {
        console.error('Erro ao consultar academias:', error.message);
        throw new Error(error.message || 'Erro ao consultar academias');
    }
};
