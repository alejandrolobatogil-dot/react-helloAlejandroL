import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Cards";
import Navbar from "./Nav";
import Titulo from "./Titulo";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
		
			<Navbar/>
            <Titulo/>
			<div class="container d-flex justify-content-center">
            <Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;