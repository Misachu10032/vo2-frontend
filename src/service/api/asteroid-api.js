import axios from 'axios';
import baseURL from '../../config';

const api = axios.create({
  baseURL: baseURL,
});

export const getOneMinerHistory = async (id) => {
  try {
    const response = await api.get(`/history?minerId=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching miner history:', error);
    throw error;
  }
};
