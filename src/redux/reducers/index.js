import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import { adressReducer } from "./adressReducer"

const reducers = combineReducers({
    allEvents: eventReducer,
    allAdresses: adressReducer,
})

export default reducers;