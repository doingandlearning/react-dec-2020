import React from 'react'

// Import the useSelector() and useDispatch() functions from React Redux.
import {useSelector, useDispatch} from 'react-redux'

import Product from './Product'
import {likeProduct, removeProduct} from '../code/actions'

function ProductList() {

    // Call React Redux useSelector() function, to get access to "store" object in Redux Store.
    const {products} = useSelector(store => store)

    // Call React Redux useDispatch() function, to get access to Redux Store dispatch() function.
    const dispatch = useDispatch()

    // In the code below, note in particular how we dispatch actions to Redux via the dispatch() function.
    return (
        <div>
			<h1>Totally Awesome Products [Example 5]</h1>
            {(products.length === 0) ?
				<div>No products</div> :              
				products.map(p =>
                    <Product 
						{...p} 
						onLike={() => dispatch(likeProduct(p.id))}
						onRemove={() => dispatch(removeProduct(p.id))}
					/>
                )
            }
        </div>
    )
}
export default ProductList
