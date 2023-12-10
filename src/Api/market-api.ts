import axios from 'axios';
import { httpConfig } from '../Utils/http';
export const getMarkets = async () => {
    const res = await axios.get(`${httpConfig().baseUrl}/v1/mkt/markets/`);
    return res.data;
}