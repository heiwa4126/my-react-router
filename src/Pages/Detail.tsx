import { useNavigate, useParams } from 'react-router-dom';
import { useDocTitle } from "../customHooks"

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  useDocTitle("Detail : " + id)

  return (
    <>
      <div>Detail {id}</div>
      <button onClick={() => { navigate(-1) }}>GoBack</button>
    </>
  );
  // navigate()でなく <Link to="/">Home</Link> でもいいはず
};
