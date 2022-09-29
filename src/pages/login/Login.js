import { useState } from "react"
import { supabase } from "../../supabase/client";

function Login() {
  const [email, setEmail] = useState("");

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