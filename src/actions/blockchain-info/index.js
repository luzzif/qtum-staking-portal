import { postLoading, deleteLoading } from "../loadings";
import { qtumApiClient } from "../../clients/qtum-api";

export const GET_BLOCKCHAIN_INFO_SUCCESS = "GET_BLOCKCHAIN_INFO_SUCCESS";
export const GET_BLOCKCHAIN_INFO_FAILURE = "GET_BLOCKCHAIN_INFO_FAILURE";

export const getBlockchainInfoSucces = (netStakeWeight) => ({
    type: GET_BLOCKCHAIN_INFO_SUCCESS,
    netStakeWeight
})

export const getBlockchainInfoError = () => ({
    type: GET_BLOCKCHAIN_INFO_FAILURE
})

export const getBlockchainInfo = () => async dispatch => {
    dispatch(postLoading());
    try {
        const { data: { netStakeWeight } } = await qtumApiClient.get("/info");
        dispatch(getBlockchainInfoSucces(netStakeWeight));
    } catch (error) {
        dispatch(getBlockchainInfoError());
    }
    dispatch(deleteLoading());
}