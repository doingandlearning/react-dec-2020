import React from "react";
import { Link } from "react-router-dom";
import ProductStore from './ProductStore'

function Products() {
	
	let products = ProductStore.getAllProductItems()

	return (
		<React.Fragment>
			<div className="content">
				<h1>Products</h1>
				<ul>
					{products.map((product, i) =>
						<li key={i}>
							<Link to={`product/${product.id}`}>{product.description}</Link>
						</li>
					)}
				</ul>
			</div>
		</React.Fragment>
    )
}
export default Products;