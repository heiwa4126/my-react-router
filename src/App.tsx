import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

function App() {
	return (
		<>
			<header>This is header</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
