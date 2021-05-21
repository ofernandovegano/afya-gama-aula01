import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postform = axios.create({
  baseURL: 'https://webhook.site/62b29cb9-e3a7-4e31-8241-b1df5c48b344'
});
