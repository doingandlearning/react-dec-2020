import React from "react";
import './Home.css'
import splash from './lighthouse.jpg'   // Tell Webpack this code file uses this image

function Home() {
    return (
	<div className="container">
		<img src={splash} alt="React Sagas" />
		<div className="centered">Redux Saga in practice</div>
	</div>
    )
}
export default Home;