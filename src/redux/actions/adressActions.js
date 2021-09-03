import { ActionTypes } from "../constants/action-types"

export const setAdresses = (adress) => {
    return {
        type: ActionTypes.SET_ADRESSES,
        payload: adress,
    }
}

