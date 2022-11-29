import { useNavigate, useParams } from 'react-router-dom';

interface RouterParams {
  id: string
}

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div>Detail {id}</div>
      <button onClick={() => { navigate(-1) }}>GoBack</button>
    </>
  );
};
