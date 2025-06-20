import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useActionState } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer(); 
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch({ type: "remove_token" });
		navigate("/");
	};
	const token = sessionStorage.getItem("token");
	// const remove_token = sessionStorage.removeItem("token");
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{ !token ? 
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>
					:
					<Link to="/">
						<button onClick={handleClick} className="btn btn-primary">Logout</button>
					</Link>
					// <button onClick={remove_token} className="btn btn-primary">Logout</button>
					}
				</div>
			</div>
		</nav>
	);
};