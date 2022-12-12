import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("useTasks must be used within a TaskContextProvider");
    }
    return context; 
}

export const TaskContextProvider = ({ children }) => {
    return <TaskContext.Provider value={{ name: "Angelo" }}>
        {children}
    </TaskContext.Provider>
}