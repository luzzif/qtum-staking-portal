import { GET_PRICE_SUCCESS, GET_PRICE_FAILURE } from "../../actions/prices";

export const pricesReducer = (state = 0, action) => {
    switch (action.type) {
        case GET_PRICE_SUCCESS: {
            return action.price;
        }
        case GET_PRICE_FAILURE: {
            const { error } = action;
            return { ...state, error };
        }
        default: {
            return state;
        }
    }
};
