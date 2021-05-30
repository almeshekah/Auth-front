import { ThemeProvider } from "styled-components";
import { useState } from "react";

// Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

// Styling
import { GlobalStyle } from "./styles";

const theme = {
	light: {
		mainColor: "#242424",
		backgroundColor: "#fefafb",
		pink: "#ff85a2",
		red: "#ff3232",
	},
	dark: {
		mainColor: "#fefafb",
		backgroundColor: "#242424",
		pink: "#ff85a2",
		red: "#ff3232",
	},
};

function App() {
	const [currentTheme, setCurrentTheme] = useState("light");
	const toggleTheme = () => {
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};
	return (
		<ThemeProvider theme={theme[currentTheme]}>
			<GlobalStyle />
			<NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

			<Routes />
		</ThemeProvider>
	);
}

export default App;
