import React from "react";
import './PageNotFound.css'

function PageNotFound() {
    return (
		<div className="pagenotfound">
			<h1>OOPS 404</h1>
			<p>Invalid path: {window.location.pathname}</p>
			<p>Full URL: {window.location.href}</p>
		</div>
    )
}
export default PageNotFound;