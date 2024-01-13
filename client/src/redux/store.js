import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer  from './user/userslice.js'
import userslice from './user/userslice.js'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer= combineReducers({user:userslice})
const persistConfig={
  key:'root',
  version:1,
  storage
}
const persistedReducer =persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultmiddleware)=>getDefaultmiddleware({
    serializableCheck:false
  }),
})

export const persistor=persistStore(store);