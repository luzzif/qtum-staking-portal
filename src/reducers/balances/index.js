import {
    GET_BALANCE_SUCCESS,
    GET_BALANCE_FAILURE
} from "../../actions/balances";

export const balancesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BALANCE_SUCCESS: {
            const { address, balance } = action;
            return { ...state, [address]: balance };
        }
        case GET_BALANCE_FAILURE: {
            const { error } = action;
            return { ...state, error };
        }
        default: {
            return state;
        }
    }
};
