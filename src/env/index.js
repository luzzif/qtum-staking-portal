import env from "@mondora/env";

const NODE_ENV = env("NODE_ENV", { required: true });
if (NODE_ENV !== "production") {
    require("dotenv").config();
}

export const ADDRESSES = env("REACT_APP_ADDRESSES", {
    required: true,
    parse: fusedAddresses => fusedAddresses.split(";")
});

export const INITIAL_AMOUNT = env("REACT_APP_INITIAL_AMOUNT", {
    required: true
});

export const CRYPTO_COMPARE_API_KEY = env("REACT_APP_CRYPTO_COMPARE_API_KEY", {
    required: true
});

export const FIAT_CURRENCY = env("REACT_APP_FIAT_CURRENCY", { required: true });
