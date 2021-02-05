import axios from 'axios';

export const scryfall = axios.create({
  baseURL: 'https://api.scryfall.com',
});
