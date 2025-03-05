import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/Home/Home";
import Signup from "./component/Signup/signUp";
import Login from "./component/Login/Login";
import ResetPasswordLocal from './component/forgotPassword/passwordReset'
import './styling/Styling.scss'

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/forgotpassword" exact element={<ResetPasswordLocal />} />
		</Routes>
	);
}

export default App;