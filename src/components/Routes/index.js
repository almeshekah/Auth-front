import { Route, Switch } from "react-router";

// Components
import Signup from "../authorisation/Signup";
import Signin from "../authorisation/Signin";
import Home from "../Home";

const Routes = () => {
	return (
		<Switch>
			<Route path="/signup">
				<Signup />
			</Route>
			<Route path="/signin">
				<Signin />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
