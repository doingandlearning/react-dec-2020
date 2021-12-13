import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
		<nav>
			<NavLink exact to="/">Home</NavLink>&nbsp;|&nbsp;
			<NavLink to="/books">Books</NavLink>&nbsp;|&nbsp;
			<NavLink to="/films">Films</NavLink>&nbsp;|&nbsp;
			<NavLink to="/moreStuff">More stuff</NavLink>
		</nav>
    )
}
export default Menu;

