import React from "react";
import './AddProductForm.css'
import {addProduct} from '../code/actions'

function AddProductForm({store}: any) {

	// Use the React useRef() hook to create React "refs".
	// This enables us to refer to elements in the DOM, so we can get the user's input.
	let descrElem = React.useRef<HTMLInputElement>(null) 
	let priceElem = React.useRef<HTMLInputElement>(null)

	// Handle the "onSubmit" event for the form.
	// Dispatch an appropriate action to the Redux store, to represent the product to add.
    const onAddProduct = (event: any) => {
		event.preventDefault()
		if (descrElem.current && priceElem.current) {
			store.dispatch(addProduct(descrElem.current.value, Number(priceElem.current.value)) )
			descrElem.current.focus()
			descrElem.current.value = ''
			priceElem.current.value = ''
		}
    }

	// Render the "add product" form.
	// Note the <input> fields use the React "ref" attribute - 
	// the "ref" attribute initializes a "ref" variable to refer to the DOM element.
	return (
        <div>
			<h2>Add a new product</h2>
			<form className="addProduct" onSubmit={onAddProduct}>
				<div>
					<label>Description</label>
					<input type="text" required ref={descrElem} />
				</div>
				
				<div>
					<label>Price</label>
					<input type="number" required ref={priceElem} />
				</div>
				
				<div>
					<button>Add Product</button>
				</div>
			</form>
		</div>
    )

}
export default AddProductForm
