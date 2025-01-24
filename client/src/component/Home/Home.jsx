import React from "react";


const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	
	
	return (
		<div className='main_container'>
			<nav className='navbar'>
				<h1>fakebook</h1>
				<button onClick={handleLogout} className='white_btn'>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Home;