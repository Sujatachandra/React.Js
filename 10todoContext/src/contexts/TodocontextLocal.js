import { createContext, useContext } from "react";

// create the context and export it 
export const TodocontextLocal = createContext({
    // tehre could be multiple todo 
    // and the will start with some default values
    toods:[
        {
            id: 1,
            todo: "Todo msg", 
            completed: false,
        }
    ],
    // methods 
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// create a method 
// and pass on the context there and export it 
export const useTodo = () => {
    // we need to give the context within the useContext hook , we need to tell that of which we are talking about 
    return useContext(TodocontextLocal);
}

// export the provider 
export const TodoProvider = TodocontextLocal.Provider;