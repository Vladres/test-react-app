import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReduser from '../redusers/index'


export default  () => {
    const store = createStore(rootReduser , applyMiddleware(logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
};

