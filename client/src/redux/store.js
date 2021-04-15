import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getUser} from './reducers/userReducer'
import {getHeadlines} from './reducers/headlinesReducer'
import {sourceReducer} from './reducers/sourceReducer'

const reducer = combineReducers({
    user: getUser,
    headlines: getHeadlines,
    sources: sourceReducer,
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store