
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";

interface todoState{
     todoList:Todo[];
}


const initialState:todoState = {
     todoList:[],
};

export const todoSlice = createSlice({
     //name
     name:'todo',
     initialState,
     //reducers
     reducers:{
          //addTodo
          addTodo:(state, action:PayloadAction<Todo>)=>{
               state.todoList.push(action.payload)
          },
          //deleteTodo
          deleteTodo:(state, action:PayloadAction<string>)=>{
               state.todoList = state.todoList.filter((item)=>item?._id !== action.payload
               );
          },
          //removeTodo
          removeTodo:(state)=>{
               state.todoList = [];

          }
     },
});

export const {addTodo, deleteTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;