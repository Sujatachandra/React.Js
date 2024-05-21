import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts';
import './App.css'
import { TodoForm} from './components';
import TodoItem from './components';

function App() {
  
  // by default e will take the value of todo as an empty array 
  const[todos, setTodos] = useState([]);

  // define the methods defined in the values 
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  
  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }



  useEffect(() => {
    // localstorage.getline method will return the values as a string format so we will parse the data in json format 
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0)
      {
          setTodos(todos)
      }
  }, [])


  // now we want our todos to store in the local storage 
  useEffect(() => {
     // while  getting the item we converted the data in json so while setting the data in the localstorage we have convert 
    // the data again in string format becauyse in localstorage data will be stored in form of strings
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

    // after wrapping the components in the provider we need set the values as well 
    return (
    <TodoProvider value = {{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
  
}

export default App


//Local storage in React.js is a way to store data in the user's browser. It allows you to save information (like user settings or 
//preferences) that stays even after the browser is closed. You can use it to make your React apps remember things between sessions.