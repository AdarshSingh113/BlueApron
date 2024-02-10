import axios from 'axios';

export const newsDataApi = page => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&page=${page}&apiKey=31ed4e2a042940f7952556e462ea4f5c`,
  );
};

export const getMarkerDataApi = () => {
  return axios.get('https://dg1zxxk3i0.execute-api.ap-south-1.amazonaws.com/v1/stations');
};
