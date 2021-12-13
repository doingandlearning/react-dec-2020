import React from "react";
import './Home.css'
import splash from './swanseabay.jpg'   // Tell Webpack this code file uses this image

function Home() {
    return (
	<div className="container">
		<img src={splash} alt="React Redux" />
		<div className="centered">Redux and React in practice</div>
	</div>
    )
}
export default Home;