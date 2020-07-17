import {combineReducers} from 'redux'

import productReducer from './productData'
import {selectedProductReducer, productDetailReducer} from './selectedProduct'
import {cartReducer} from './cartReducer'



const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer,
productDetail :productDetailReducer,
cart: cartReducer
})

export default allReducers;