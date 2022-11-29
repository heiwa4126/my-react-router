import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';
import { NotFound } from './Pages/NotFound';

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
  )
}

export default App
