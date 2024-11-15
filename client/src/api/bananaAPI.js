import axios from 'axios';

const BANANA_API_URL = 'https://marcconrad.com/uob/banana';

export const getBananaValue = async () => {
  try {
    const response = await axios.get(`${BANANA_API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banana data:", error);
    throw error;
  }
};
