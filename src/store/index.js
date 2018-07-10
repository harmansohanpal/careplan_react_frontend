import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

export default store;