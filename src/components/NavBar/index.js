//styles
import { Logo, ThemeButton, NavItem, NavStyled } from "./styles";
import { signout } from "../../store/actions/authActions";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const NavBar = (props) => {
	const user = useSelector((state) => state.authReducer.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSignout = () => {
		dispatch(signout());
		history.push("/");
	};

	return (
		<div className="navbar navbar-expand">
			{user ? (
				<p>Hala </p>
			) : (
				<>
					<NavItem className="nav-item nav-link" to="/signup">
						Signup
					</NavItem>

					<NavItem className="nav-item nav-link" to="/signin">
						Sign in
					</NavItem>
				</>
			)}

			{user && (
				<>
					<NavItem className="nav-item nav-link" onClick={handleSignout} to="/">
						Sign out
					</NavItem>
					<div className="navbar-nav ml-auto">
						<NavItem className="nav-item" to="/products">
							Products
						</NavItem>
						<NavItem className="nav-item nav-link" to="/shops">
							Shops
						</NavItem>
					</div>
				</>
			)}
		</div>
	);
};

export default NavBar;
