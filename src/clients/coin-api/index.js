import axios from "axios";
import { COIN_API_ENDPOINT, COIN_API_KEY } from "../../env";

export const coinApiClient = axios.create({
    baseURL: COIN_API_ENDPOINT,
    headers: { "X-CoinAPI-Key": COIN_API_KEY }
});
