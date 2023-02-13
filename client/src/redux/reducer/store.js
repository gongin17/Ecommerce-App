import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
let store = createStore(persistedReducer);
let Persistor = persistStore(store);

export { Persistor };
export default store;

