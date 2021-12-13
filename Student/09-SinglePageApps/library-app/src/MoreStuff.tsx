import React from "react";
import Book from './Book'
import Film from './Film'

function MoreStuff({books, films}: {books: Array<Book>, films: Array<Film>}) {
    return (
		<div className="content">
			Implement MoreStuff component UI here!
		</div>
    )
}
export default MoreStuff;