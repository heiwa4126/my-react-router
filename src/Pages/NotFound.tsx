import { Link } from "react-router";
import { useDocTitle } from "../customHooks";

export const NotFound = () => {
	useDocTitle("Not Found");
	return (
		<>
			<div>Not Found</div>
			<Link to="/">home</Link>
		</>
	);
};
