import React from "react";
import Product from './Product'

function ProductList({store}: any) {

    const {products} = store.getState()

    return (
        <div>
			<h1>Totally Awesome Products [Example 1]</h1>
            {(products.length === 0) ?
                <div>No products</div> :
                products.map( (p : any) => {
                    console.log(p)
                    return <Product {...p} />
                } 
            )}
        </div>
    )
}
export default ProductList
