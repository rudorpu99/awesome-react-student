import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);//커링??리턴할때 다음 괄호 안에있는 인자를 받는 함수를 또..

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}