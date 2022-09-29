import './App.css';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login';
import Home from './pages/login/Home';
import NotFound from './pages/login/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
