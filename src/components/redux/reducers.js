import popUpReducer from "./popupreducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isShowPopup: popUpReducer
})

export default allReducers;