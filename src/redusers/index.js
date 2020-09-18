import { combineReducers } from 'redux'
import products from './product'
import filters from './filters'

export default combineReducers({
    products,
    filters
})