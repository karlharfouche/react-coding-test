import { ActionTypes } from "../constants/action-types"

export const setEvents = (event) => {
    return {
        type: ActionTypes.SET_EVENTS,
        payload: event,
    }
}

