import React from "react";
import ItemsList from './ItemsList'
import Table from './Table'

import {useSelector} from 'react-redux'

function Books() {

    const {books, format} : any = useSelector(store => store)

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