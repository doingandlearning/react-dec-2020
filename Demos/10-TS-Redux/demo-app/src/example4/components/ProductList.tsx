import React from "react";
import Product from './Product'
import {likeProduct, removeProduct} from '../code/actions'
import {MyReduxStoreContext} from "../code/contexts";

// Note our component doesn't receive the Redux store as a parameter anymore.
// Instead, the component can get the data for itself from the "context".
function ProductList() {

    // Get the Redux store from the "context".
    const store: any = React.useContext(MyReduxStoreContext)

    const {products} = store.getState()

    return (
        <div>
			<h1>Totally Awesome Products [Example 4]</h1>
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
