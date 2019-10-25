import { GET_BLOCKCHAIN_INFO_SUCCESS, GET_BLOCKCHAIN_INFO_FAILURE } from "../../actions/blockchain-info";

export const blockchainInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BLOCKCHAIN_INFO_SUCCESS: {
            const { netStakeWeight } = action;
            return {
                ...state,
                netStakeWeight
            }
        }
        case GET_BLOCKCHAIN_INFO_FAILURE: {
            const { error } = action;
            return { ...state, error };
        }
        default: {
            return state;
        }
    }
}