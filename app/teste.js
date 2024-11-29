import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { consultarAcademias } from '../api/academiaService.js';


const Teste = () => {

    const [itensPicker, setItensPicker] = useState([]);

    useEffect(() => {
        const carregarItens = async () => {
            try {
                console.log('Iniciando carregamento de academias...');
                const itens = await consultarAcademias();
                console.log('Academias carregadas:', itens); // Log do retorno da API
    
                const formatados = itens.map(item => ({
                    label: item.nome,
                    value: item.id,
                }));
                console.log('Itens formatados:', formatados);
                setItensPicker(formatados);
            } catch (error) {
                console.error('Erro ao carregar academias:', error.message);
            }
        };
    
        carregarItens();
    }, []);
    

  return (
    <View>
      <Text>teste</Text>
    </View>
  )
}

export default Teste
