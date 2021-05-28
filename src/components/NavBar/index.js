import { AuthButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
	return (
		<nav className="navbar navbar-expand">
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<Link to="/signup">
						<AuthButtonStyled>Sign up</AuthButtonStyled>
					</Link>
					<Link to="/signin">
						<AuthButtonStyled>Sign in</AuthButtonStyled>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
