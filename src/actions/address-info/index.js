import { postLoading, deleteLoading } from "../loadings";
import { qtumApiClient } from "../../clients/qtum-api";

export const GET_ADDRESS_INFO_SUCCESS = "GET_ADDRESS_INFO_SUCCESS";
export const GET_ADDRESS_INFO_FAILURE = "GET_ADDRESS_INFO_FAILURE";

export const getAddressInfoSuccess = (address, balance, blocksMined) => ({
    type: GET_ADDRESS_INFO_SUCCESS,
    address,
    balance,
    blocksMined
});

export const getAddressInfoFailure = error => ({
    type: GET_ADDRESS_INFO_FAILURE,
    error
});

export const getAddressInfo = address => async dispatch => {
    dispatch(postLoading());
    try {
        const { data: { balance, blocksMined } } = await qtumApiClient.get(
            `/address/${address}`
        );
        dispatch(getAddressInfoSuccess(address, parseInt(balance), blocksMined));
    } catch ({ message, apiMessage }) { dispatch(getAddressInfoFailure(message)) }
    dispatch(deleteLoading());
};
