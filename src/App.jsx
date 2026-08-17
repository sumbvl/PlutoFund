import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Body from './components/Body';

export default function App () {
  return (
    <div className='bg-radial-[at_99%_45%] from-sky-700 via-sky-950 to-slate-950 to-90%'>
    <NavBar />
    <Routes>
      <Route path="/" element={<Body />} />
    </Routes>
    </div>
  );
}
