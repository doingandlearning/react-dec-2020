import React from "react";
import Product from './Product'
import {likeProduct, removeProduct} from '../code/actions'

function ProductList({store}) {

    const {products} = store.getState()

    return (
        <div>
			<h1>Totally Awesome Products [Example 3]</h1>
            {(products.length === 0) ?
				<div>No products</div> :              
				products.map(p =>
                    <Product 
						{...p} 
						onLike={() => store.dispatch(likeProduct(p.id))}
						onRemove={() => store.dispatch(removeProduct(p.id))}
					/>
                )
            }
        </div>
    )
}
export default ProductList
