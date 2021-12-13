import React from 'react';
import {createStore, combineReducers} from 'redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {
    return (
        <div>
            <ProductList store={store} />
        </div>
    )
}
export default Main