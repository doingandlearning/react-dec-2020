import React from "react";
import LikePanel from './LikePanel'

import { useSelector, useDispatch } from 'react-redux'
import { changeFormat } from './reduxcode/actions'

function MoreStuff() {

    const {books, films, format} : any = useSelector(store => store)
    const dispatch : any = useDispatch()

	function onFormatSelectionChanged() {
		const selectElem = document.getElementById('formatSelect') as HTMLInputElement;
		const newFormat = selectElem.value
		dispatch(changeFormat(newFormat))
		alert(`Format changed to ${newFormat}`)
	}

	return (
		<div className="content">

			<h1>More Stuff</h1>

			<h2>Summary Info</h2>
			<p>Number of books: {books.length}</p>
			<p>Number of films: {films.length}</p>

			<LikePanel />

			<h2>Format</h2>
			<select id='formatSelect' onChange={onFormatSelectionChanged} defaultValue={format}>
				<option value="TABLE">Table</option>
				<option value="ORDERED_LIST">Ordered List</option>
				<option value="UNORDERED_LIST">Unordered List</option>
			</select>
		</div>
    )
}
export default MoreStuff;