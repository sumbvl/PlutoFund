import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-radial-[at_99%_45%] from-sky-700 via-sky-950 to-slate-950 to-90%">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
