import { useState } from "react"
import { supabase } from "../supabase/client";

export default function TaskForm() {

    const [taskName, setTaskName] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(taskName);
        try {
            const user = supabase.auth.user();
            const result = await supabase.from("tasks   ").insert({
                name: taskName,
                userId: user.id
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="taskName" 
                    placeholder="Write a task name"
                    onChange={e => setTaskName(e.target.value)}
                />
            </form>
        </div>
    )
}