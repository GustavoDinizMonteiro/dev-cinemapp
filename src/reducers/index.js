import thunk from 'redux-thunk'
import favorites from './favorites'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { applyMiddleware, createStore, combineReducers } from 'redux'

const root = combineReducers({ favorites })

const middleware = [thunk]

if (process.env.REACT_APP_ENV === 'dev') {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, root)

let store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)
let persistor = persistStore(store)

export default { store, persistor }