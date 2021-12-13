import React from "react";
import ItemsList from './ItemsList'
import Table from './Table'

function Films() {

    // TODO:
	// Call useSelector() to get data from the Redux store.

	return (
		<div className="content">
			<h1>Films</h1>
			{
				format === "TABLE" ?  
					<Table items={films} /> :
					<ItemsList items={films} ordered={format === "ORDERED_LIST"} /> 
		}
		</div>
    )
}
export default Films;
