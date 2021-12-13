import React from "react";
import './Product.css'

function Product({description, price, likes, mostRecentLike, onLike, onRemove} : any) {

    return (
        <div className="product">
            <h2>{description}</h2>
            <div>Price: {price}</div>
            <div>Likes: {likes}</div>
            <div>Most recent like: {mostRecentLike ? mostRecentLike.toString() : 'n/a'}</div>
            <button onClick={onLike}>Like</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}
export default Product
