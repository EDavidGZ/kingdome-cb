import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./question-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middleware/logger-middleware";

const rootReducer = combineReducers({
    QUESTION: questionReducer
})

const persistConig = {
    key: root,
    version: 1,
    storage,
    whiteList: ["QUESTION"],
}

const persistedReducers = persistReducer(persistConig, rootReducer )

const store = configureStore({
  reducer:  persistedReducers,
middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).prepend(loggerMiddleware.middleware),
});


const persistor = persistStore(store)

export { store, persistor } 