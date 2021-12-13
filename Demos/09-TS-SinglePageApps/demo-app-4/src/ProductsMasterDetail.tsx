import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import ProductStore from './ProductStore'
import Product from './Product'

function ProductsMasterDetail() {
	
	let products = ProductStore.getAllProductItems()

	// Get the current path (this will be /productsmasterdetail). 
	let { path } = useRouteMatch();
	console.log(`${new Date()} In ProductsMasterDetail, path is ${path}`)

	return (
		<React.Fragment>
			<div className="content">
				<h1>Products</h1>
				<ul>
					{products.map((product, i) =>
						<li key={i}>
							{/* Render a link with a path such as /productsmasterdetail/42 */}
							<Link to={`${path}/${product.id}`}>{product.description}</Link>
						</li>
					)}
				</ul>
				<hr/>
			</div>

			{/* Define a nested route table, to decide what else to display on this page */}
			<Switch>

				{/* If the path is just /productsmasterdetail, i.e. user hasn't clicked a product yet... */}
				<Route exact path={path}>
					<div className="content">Select a product...</div>
				</Route>

				{/* If the path is something like /productsmasterdetail/42, display that product here and now */}
				<Route path={`${path}/:id`}>
					<Product/>
				</Route>

			</Switch>
		</React.Fragment>
    )
}
export default ProductsMasterDetail;