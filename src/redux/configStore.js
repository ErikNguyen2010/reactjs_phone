import { combineReducers, createStore } from "redux";
import { sanPhamChiTietReducer } from "./reducer/sanPhamChiTietReducer";
import { gioHangReducerDemo } from "./reducer/gioHangReducer";
const rootReducer = combineReducers ({
    gioHangReducerDemo,
    sanPhamChiTietReducer

   
});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());