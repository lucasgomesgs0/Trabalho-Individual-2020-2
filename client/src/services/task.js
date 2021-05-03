import axios from 'axios';

const DEV_URL = 'http://localhost:8000/task';
const PROD_URL = 'https://tasks-gces-api.herokuapp.com/task/';

const ENV = process.env.NODE_ENV;

export const api = axios.create({
  baseURL: ENV == 'development' ? DEV_URL : PROD_URL
});
