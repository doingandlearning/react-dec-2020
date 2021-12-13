import React from "react";
import './Home.css'
import splash from './splash.jpg';   // Tell Webpack this code file uses this image

function Home() {
    return (
		<div className="container">
			<img src={splash}/>
			<div className="centered">My Library</div>
		</div>
    )
}
export default Home;