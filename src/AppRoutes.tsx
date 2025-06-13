import { Routes, Route } from 'react-router';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx'
import PorCategoria from './pages/por-categoria.tsx'
import QuadraPage from './pages/quadra-page.tsx';
import UserProfile from './pages/user-profile.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/por-categoria" element={<PorCategoria />} />
      <Route path="/quadra-page" element={<QuadraPage />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
