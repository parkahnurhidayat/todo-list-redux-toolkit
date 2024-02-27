import { createSlice } from "@reduxjs/toolkit";
import { addTodo, editTodo, deleteTodo, fecthTodo } from "../thunks/TodoThunks";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fecthTodo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(fecthTodo.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(fecthTodo.rejected, (state) => {
      console.log("rejected");
    });
  },
});

export const todoReducer = todoSlice.reducer;
