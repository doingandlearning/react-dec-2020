import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
		<nav>
			<Link to="/">Home</Link>&nbsp;|&nbsp;
			<Link to="/products">Products</Link>&nbsp;|&nbsp;
			<Link to="/productsmasterdetail">Products master/detail</Link>&nbsp;|&nbsp;
			<Link to="/contact">Contact</Link>&nbsp;|&nbsp;
			<Link to="/about">About</Link>
		</nav>
    )
}
export default Menu;

