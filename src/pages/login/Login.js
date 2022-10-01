import { useState, useEffect } from "react"
import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const result = await supabase.auth.signIn({
        email: email,
      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(supabase.auth.user()){
      navigate('/');
    }
  }, [navigate])

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="youremail@site.com"
        onChange={e => setEmail(e.target.value)}
      />
      <button>
          Send
      </button>
    </form>
  )
}

export default Login