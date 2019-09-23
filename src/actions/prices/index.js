import { postLoading, deleteLoading } from "../loadings";
import { coinApiClient } from "../../clients/coin-api";

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
            data: { rate }
        } = await coinApiClient.get("/v1/exchangerate/QTUM/EUR");
        dispatch(getPriceSuccess(rate));
    } catch ({ message, apiMessage }) {}
    dispatch(deleteLoading());
};
