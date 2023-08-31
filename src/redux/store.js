/**
 * 创建store
 */
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import playListReducer from "./reducers/playlistReducer";

// 组合Reducer
const rootReducer = combineReducers({
  playlist: playListReducer,
});

// 创建store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
