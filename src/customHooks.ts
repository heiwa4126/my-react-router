// see https://reactgo.com/react-document-title/#creating-usedoctitle-custom-hook
import { useEffect } from "react";

const useDocTitle = (title: string) => {
	useEffect(() => {
		document.title = `my-react-router - ${title}`;
	});
};

export { useDocTitle };
