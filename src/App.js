import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import '../src/services/AuthService'
import NotFound from './pages/NotFound';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projet-1' element={<Project1 />} />
        <Route path='/projet-2' element={<Project2 />} />
        <Route path='/projet-3' element={<Project3 />} />
        <Route path='/projet-4' element={<Project4 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
