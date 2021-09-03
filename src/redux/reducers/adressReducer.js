import { ActionTypes } from "../constants/action-types";

const initialState = {
    adresses: [],
};

export const adressReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ADRESSES:
            return { ...state, adresses: payload };
        default:
            return state;
    }
};