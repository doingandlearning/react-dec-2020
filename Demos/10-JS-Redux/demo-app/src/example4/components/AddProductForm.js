import React from "react";
import './AddProductForm.css'
import {addProduct} from '../code/actions'
import {MyReduxStoreContext} from "../code/contexts";

// Note our component doesn't receive the Redux store as a parameter anymore.
// Instead, the component can get the data for itself from the "context".
function AddProductForm() {

    // Get the Redux store from the "context".
    const store = React.useContext(MyReduxStoreContext)

	let descrElem = React.useRef(null) 
	let priceElem = React.useRef(null)

    const onAddProduct = event => {
		event.preventDefault()
		if (descrElem.current && priceElem.current) {
			store.dispatch(addProduct(descrElem.current.value, Number(priceElem.current.value)) )
			descrElem.current.focus()
			descrElem.current.value = ''
			priceElem.current.value = ''
		}
    }

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
