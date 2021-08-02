// create your App component here
import React, { useState, useEffect } from "react";

function App() {
	const [img, setImg] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setImg(data);
				setLoading(false);
			});
	}, []);
	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<img src={img.message} alt="A Random Dog" />
		</div>
	);
}

export default App;
