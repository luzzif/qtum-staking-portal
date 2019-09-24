import axios from "axios";
import { CRYPTO_COMPARE_API_ENDPOINT } from "../../env";

export const cryptoCompareClient = axios.create({
    baseURL: CRYPTO_COMPARE_API_ENDPOINT
});
