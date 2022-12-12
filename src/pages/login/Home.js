import { supabase } from "../../supabase/client"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import TaskForm from "../../components/TaskForm";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    if(!supabase.auth.user()){
      navigate('/login');
    }
  }, [navigate])

  return (
    <div>
      Home
      <button onClick={()=> supabase.auth.signOut()}>
        Logout
      </button>
      <TaskForm />
    </div>
  )
}

export default Home