import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./Reducers/reducers";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage_engine = typeof window !== "undefined" ? storage : createNoopStorage();

const persistConfig = {
    key: "root",
    storage: storage_engine,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = null;
if (typeof window !== "undefined") {
    persistor = persistStore(store);
}

export { persistor };
export default store;