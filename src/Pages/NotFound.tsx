import { useEffect } from 'react';
import { Link } from "react-router-dom";


export const NotFound = () => {
  useEffect(() => { document.title = "Not Found" }, [])
  return <><div>Not Found</div><Link to="/">home</Link></>;
};
