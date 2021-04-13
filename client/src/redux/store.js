import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getUser} from './reducers/userReducer'
import {getHeadlines} from './reducers/headlinesReducer'

const reducer = combineReducers({
    user: getUser,
    headlines: getHeadlines,
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store