import React from "react";
import ItemsList from './ItemsList'
import Table from './Table'

import {useSelector} from 'react-redux'

function Films() {

    const {films, format} : any = useSelector(store => store)

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
