import axios from "axios";
import { QTUM_API_ENDPOINT } from "../../env";

export const qtumApiClient = axios.create({ baseURL: QTUM_API_ENDPOINT });
