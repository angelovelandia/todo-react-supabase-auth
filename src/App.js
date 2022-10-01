import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { supabase } from './supabase/client';

import Login from './pages/login/Login';
import Home from './pages/login/Home';
import NotFound from './pages/login/NotFound';

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
      if(!session){
        navigate('/login');
      } else {
        navigate('/');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
