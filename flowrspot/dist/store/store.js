import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
var persistConfig = {
    key: "root",
    storage: storage,
};
var persistedReducer = persistReducer(persistConfig, rootReducer);
var composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
var store = createStore(persistedReducer, composeEnhancers());
var persistor = persistStore(store);
export { store, persistor };
//# sourceMappingURL=store.js.map