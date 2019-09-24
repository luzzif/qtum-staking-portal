import { postLoading, deleteLoading } from "../loadings";
import { cryptoCompareClient } from "../../clients/crypto-compare";
import { CRYPTO_COMPARE_API_KEY } from "../../env";

export const GET_PRICE_SUCCESS = "GET_PRICE_SUCCESS";
export const GET_PRICE_FAILURE = "GET_PRICE_FAILURE";

export const getPriceSuccess = price => ({
    type: GET_PRICE_SUCCESS,
    price
});

export const getPriceFailure = error => ({
    type: GET_PRICE_FAILURE,
    error
});

export const getPrice = () => async dispatch => {
    dispatch(postLoading());
    try {
        const {
            data: { EUR: price }
        } = await cryptoCompareClient.get("data/price?fsym=QTUM&tsyms=EUR", {
            params: { api_key: CRYPTO_COMPARE_API_KEY }
        });
        dispatch(getPriceSuccess(price));
    } catch (error) {
        dispatch(getPriceFailure(error));
    }
    dispatch(deleteLoading());
};
