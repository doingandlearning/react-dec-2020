import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import ProductStore from "./ProductStore"
import ProductItem from "./ProductItem"

function Product() {
	let { id } = useParams();
	let prod = ProductStore.getProductItemById(id)

	if (!prod) {
		return (
			<div className="content">
				<h1>Product {id} not found</h1>
			</div>
		)
	}
	else {
		return (
			<div className="content">
				<h1>Product details</h1>
				<div>Description: {prod.description}</div>		
				<div>Price: {prod.price}</div>
				<div>Likes: {prod.likes}</div>
				<div>Most recent like: {prod.mostRecentLike}</div>
			</div>
	    )
	}
}
export default Product;