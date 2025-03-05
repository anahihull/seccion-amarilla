import axios from 'axios';

const API_URL = 'http://10.4.42.18:3000';


  export const getSuper = async () => {
    try {
      const response = await axios.get(`${API_URL}/superheroes`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener superhéroes:', error);
      throw error;
    }
  };


export const getSuperByPower = async (poder) => {
  try {
    const response = await axios.get(`${API_URL}/poder/${poder}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener superhéroes con el poder: ${poder}`, error);
    throw error;
  }
};
