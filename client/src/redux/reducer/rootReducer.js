import {combineReducers} from "redux";
import handleCart from "./cartreducer";

const rootReducers= combineReducers(
    {handleCart}
)

export default rootReducers;