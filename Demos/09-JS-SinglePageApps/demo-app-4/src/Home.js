import React from "react";
import './Home.css'
import splash from './swanseamarina.jpg';   // Tell Webpack this code file uses this image

function Home() {
    return (
		<div className="container">
			<img src={splash}/>
			<div className="centered">Defining links</div>
		</div>
    )
}
export default Home;