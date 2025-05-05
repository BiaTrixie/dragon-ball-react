//Importação dos pacotes
import axios from 'axios';
import type { Characters, Root } from '../model/character';

//Declaração de atributos
const API_URL = 'https://dragonball-api.com/api'
    
export const fetchCharacterList = async (offset = 0, limit=100): Promise<Characters[]> => {
        //faça a consulta no serviço
        const response = await axios.get(`${API_URL}/characters?offset=${offset}&limit=${limit}`)

        //verifico se tem retorno na resposta
        //Aqui estamo definindo o tipo de resposta baseado em um contrato
        const data: Root = await response.data;
        
        return data.items
};

