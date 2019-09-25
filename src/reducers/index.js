import { addressInfoReducer } from "./balances";
import { loadingsReducer } from "./loadings";
import { pricesReducer } from "./prices";

export const reducers = {
    addressInfo: addressInfoReducer,
    loadings: loadingsReducer,
    prices: pricesReducer
};
