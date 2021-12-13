import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
		<nav>
			<NavLink exact to="/">Home</NavLink>&nbsp;|&nbsp;
			<NavLink to="/example1">Example 1</NavLink>&nbsp;|&nbsp;
			<NavLink to="/example2">Example 2</NavLink>&nbsp;|&nbsp;
			<NavLink to="/example3">Example 3</NavLink>
		</nav>
    )
}
export default Menu;

