import { ActionTypes } from "../constants/action-types";

const initialState = {
    events: [],
};

export const eventReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_EVENTS:
            return { ...state, events: payload };
        default:
            return state;
    }
};