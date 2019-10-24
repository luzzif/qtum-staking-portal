import { addressInfoReducer } from "./balances";
import { blockchainInfoReducer } from "./blockchain-info"
import { loadingsReducer } from "./loadings";
import { pricesReducer } from "./prices";

export const reducers = {
    blockchainInfo: blockchainInfoReducer,
    addressInfo: addressInfoReducer,
    loadings: loadingsReducer,
    prices: pricesReducer
};
