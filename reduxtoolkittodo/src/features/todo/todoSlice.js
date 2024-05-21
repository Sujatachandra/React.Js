// we will import the method createslice method and then will add one more method which is nanoid 
// nanoid is basically used to generate uniwue ids 

import { createSlice, nanoid } from "@reduxjs/toolkit";

// create an initial state to define the initial state of the store
// we can take the initialstate as object and array as we wish 
const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// reducer is basically a functionality 
// and slice is a  bigger version of reducer 
export const todoSlice = createSlice({

    // these mentioned properties are there in the redux toolkit as predefined 
    name : 'todo',

    // every slice will have some initial state 
    initialState,

    // create the reducers 
    // reducers includes properties and functions
    reducers: {
        // ad todo will be the property and within this we have to write our functions
        // we can declear the function somewhere else or we can declear it here as well
        // in context api we used to write only the function declearation not the defination 
        // but here we will write the function defination as well 

        //we wll have two things inside this add todo . one is state and the another is action 
        // state will give the datas of current situation or we can say initialState 

        // and while remove the todo we should give some ids to delete the todo . and that id will come from action 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),

                // action.payload means it could be a id or text or anything 
                // payload is an object and we can access values from payload using the dot operator 
                text: action.payload
            }
            // as we put some deafult values in the state so now we have to update that value with the current value 
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }

})

// we have to export all the functionality of reducers individualy 
export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;