import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loggedinuserReducer from '../features/loggedinuser/loggedinuserSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  user: loggedinuserReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export default store;