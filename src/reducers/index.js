import { balancesReducer } from "./balances";
import { loadingsReducer } from "./loadings";
import { pricesReducer } from "./prices";

export const reducers = {
    balances: balancesReducer,
    loadings: loadingsReducer,
    prices: pricesReducer
};
