import { Link } from "react-router-dom";
import { useDocTitle } from "../../customHooks";

export const Home = () => {
	useDocTitle("Home");
	return (
		<>
			<div>
				<Link to="/detail/1">Detail 1</Link>
			</div>
			<div>
				<Link to="/detail/2">Detail 2</Link>
			</div>
			<div>
				<Link to="/detail/<m&m>">Detail &lt;m&m&gt;</Link>
			</div>
		</>
	);
};
