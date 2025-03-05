import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { getUserFromToken } from "./auth";
const Home = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const userD = getUserFromToken();
	// const { id } = useParams(); // Get the ID from the URL parameters
	const [item, setItem] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);
	const id = userD._id
	useEffect(() => {
		const fetchItem = async () => {
			// try {
			// 	const response = await fetch(`/api/userDetails/${id}`);
			// 	if (!response.ok) {
			// 		throw new Error('Item not found');
			// 	}
			// 	const data = await response.json();
			// 	setItem(data);
			// } catch (err) {
			// 	setError(err.message);
			// } finally {
			// 	setLoading(false);
			// }
			try {
				const response = await axios.get(`http://localhost:8080/api/userDetails/${id}`);
				setItem(response.data);
			} catch (err) {
				// setError(err.response?.data?.message || 'Error fetching data');
			} finally {
				// setLoading(false);
			}
		};
		fetchItem();
	}, [id]);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error: {error}</p>;




	return (
		<div className='main_container'>
			<nav className='navbar'>
				<h1>Welcome</h1>

				<i className="fa-solid fa-circle-user cursor user-icon" onClick={() => setIsVisible(!isVisible)}></i>
			</nav>
			<div>Successfully Login</div>
			{
				isVisible && <div className="user-details">
					<div className="user-details-alignment">
						<i className="fa-solid fa-circle-user user-icon"></i>
						<div>
							<div className="user-name">{item?.firstName} {item?.lastName}</div>
							<div>{item?.email}</div>
						</div>
					</div>
					{/* <div className="forgot-password"> Forgot Password</div> */}
					<div className="nav-menu-alignment">
						<Link to='/forgotpassword'>Forgot Password</Link>
						<button onClick={handleLogout} className='white_btn'>
							Logout
						</button>
					</div>
				</div>
			}
		</div>
	);
};

export default Home;