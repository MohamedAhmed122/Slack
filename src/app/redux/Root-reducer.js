import {
    combineReducers
} from 'redux';
import AuthReducer from './Auth/Auth.Reducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const rootReducer = combineReducers({
  auth: AuthReducer
})
export default persistReducer(persistConfig, rootReducer);