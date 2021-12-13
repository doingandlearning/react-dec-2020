import React from "react";
import Product from './Product'
import {likeProduct, removeProduct} from '../code/actions'

function ProductList({store}: any) {

    const {products} = store.getState()

    return (
        <div>
			<h1>Totally Awesome Products [Example 2]</h1>
            {(products.length === 0) ?
				<div>No products</div> :              
				products.map( (p: any) =>
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
