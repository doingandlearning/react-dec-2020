import React from "react";
import LikePanel from './LikePanel'

function MoreStuff() {

    // TODO:
	// Call useSelector() to get data from the Redux store.

	
    // TODO:
	// Call useDispatch() to enable you to dispatch actions to Redux.


	// This function is invoked when the user chooses an item in the <select> element down below...
	function onFormatSelectionChanged() {
		const selectElem = document.getElementById('formatSelect') as HTMLInputElement;
		const newFormat = selectElem.value

		// TODO:
		// Call changeFormat(newFormat) to create an action object, indicating the user wants to change the format.
		// Then pass this action object into dispatch(), to dispatch the action object to Redux.



	}


	return (
		<div className="content">

			<h1>More Stuff</h1>

			<h2>Summary Info</h2>
			<p>Number of books: {books.length}</p>
			<p>Number of films: {films.length}</p>

			<LikePanel />

			{ /* This bit is new - it enables the user to choose the display format */ }
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