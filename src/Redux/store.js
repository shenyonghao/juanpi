import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import tabbarReducer from './Reducers/tabbarReducer'
import listReducer from './Reducers/listReducer'
import promiseMiddleware from 'redux-promise'
const reducer = combineReducers({
    isShow:tabbarReducer,
    list:listReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(promiseMiddleware)
     ))
export default store;