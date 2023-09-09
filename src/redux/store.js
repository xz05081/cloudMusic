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
import carouselReducer from "./reducers/carouselReducer";

// 组合Reducer
const rootReducer = combineReducers({
  playlist: playListReducer,
  carousellist: carouselReducer,
});

// 创建store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
