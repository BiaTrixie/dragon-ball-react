import axios from 'axios';
import type { Planet, Root } from '../model/planet';

const API_URL = 'https://dragonball-api.com/api'
    
export const fetchPlanetsList = async (offset = 0, limit=100): Promise<Planet[]> => {

        const response = await axios.get(`${API_URL}/planets?offset=${offset}&limit=${limit}`)

        const data: Root = await response.data;
        
        return data.items
};

