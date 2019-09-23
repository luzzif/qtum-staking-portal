import env from "@mondora/env";

const NODE_ENV = env("NODE_ENV", { required: true });
if (NODE_ENV !== "production") {
    require("dotenv").config();
}

export const QTUM_API_ENDPOINT = env("REACT_APP_QTUM_API_ENDPOINT", {
    required: true
});

export const ADDRESSES = env("REACT_APP_ADDRESSES", {
    required: true,
    parse: fusedAddresses => fusedAddresses.split(";")
});

export const INITIAL_AMOUNT = env("REACT_APP_INITIAL_AMOUNT", {
    required: true
});

export const COIN_API_ENDPOINT = env("REACT_APP_COIN_API_ENDPOINT", {
    required: true
});

export const COIN_API_KEY = env("REACT_APP_COIN_API_KEY", {
    required: true
});
