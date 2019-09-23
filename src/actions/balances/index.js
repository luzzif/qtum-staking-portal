import { postLoading, deleteLoading } from "../loadings";
import { qtumApiClient } from "../../clients/qtum-api";

export const GET_BALANCE_SUCCESS = "GET_BALANCE_SUCCESS";
export const GET_BALANCE_FAILURE = "GET_BALANCE_FAILURE";

export const getBalanceSuccess = (address, balance) => ({
    type: GET_BALANCE_SUCCESS,
    address,
    balance
});

export const getBalanceFailure = error => ({
    type: GET_BALANCE_FAILURE,
    error
});

export const getBalance = address => async dispatch => {
    dispatch(postLoading());
    try {
        const { data: balance } = await qtumApiClient.get(
            `/address/${address}/balance`
        );
        dispatch(getBalanceSuccess(address, balance));
    } catch ({ message, apiMessage }) {}
    dispatch(deleteLoading());
};
