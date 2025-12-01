import React from "react";

//include images into your bundle
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
            <Card
			title="Programacion"
			description="Too fun"
			img="https://msmk.university/wp-content/uploads/2025/02/Foto25.jpg"
			/>

			<Card
			title="Programando"
			description="In process"
			img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxteVNIzVwMwr6wrpQsAN9aMxpjERUBWNRA&s"
			/>
			<Card
			title="JavaScript"
			description="Learning"
			img="https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png"
			/>
			<Card
			title="React"
			description="Awesome"
			img="https://miro.medium.com/v2/1*VLiW4zOLz6lZX9_TUzg0eQ.png"
			/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;