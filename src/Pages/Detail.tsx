import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  useEffect(() => { document.title = "Detail:" + id }, [])

  return (
    <>
      <div>Detail {id}</div>
      <button onClick={() => { navigate(-1) }}>GoBack</button>
    </>
  );
};
