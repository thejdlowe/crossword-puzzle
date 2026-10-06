import { Puzzle } from "./components/Puzzle";
import { useEffect } from "react";
import "./App.css";

function App() {
	useEffect(() => {
		document.title = `J.D. Lowe's Puzzle`;
	}, []);
	return <Puzzle />;
}

export default App;
