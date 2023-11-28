// store.js
import { createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import SingleproductReducer from './Reducers';
import {CartReducer} from "./Reducers";

const rootreducer = combineReducers({
    SingleproductReducer,
    CartReducer
})
const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;
