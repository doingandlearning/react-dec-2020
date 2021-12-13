import React from "react";
import ItemsList from './ItemsList'
import Table from './Table'

function Books() {

    // TODO:
	// Call useSelector() to get data from the Redux store.

	return (
		<div className="content">
			<h1>Books</h1>
			{
				format === "TABLE" ?  
					<Table items={books} /> :
					<ItemsList items={books} ordered={format === "ORDERED_LIST"} /> 
			}
		</div>
    )
}
export default Books;