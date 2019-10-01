import { GET_ADDRESS_INFO_SUCCESS, GET_ADDRESS_INFO_FAILURE } from "../../actions/address-info";

export const addressInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ADDRESS_INFO_SUCCESS: {
            const { address, balance, blocksMined } = action;
            return { ...state, [address]: { balance, blocksMined } };
        }
        case GET_ADDRESS_INFO_FAILURE: {
            const { error } = action;
            return { ...state, error };
        }
        default: {
            return state;
        }
    }
};
