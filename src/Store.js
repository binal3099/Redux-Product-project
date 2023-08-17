import { createStore, applyMiddleware, compose } from 'redux'
import { Product_reducer } from './Services/Reducer/ProductReducer';
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'myroot',
    storage,
  }

const persister = persistReducer(persistConfig, Product_reducer)

const store = createStore (
    persister,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const persistor = persistStore(store)

// sagamiddle.run(CountWatcher)

export  {persistor};
export default store