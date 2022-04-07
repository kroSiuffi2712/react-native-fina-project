import axios from 'axios';
//import env from 'react-native-dotenv';
//const {API_URL, API_KEY} = env;
import {config} from '../../config';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  params: {
    api_key: config.API_KEY,
  },
});

export default axiosInstance;
