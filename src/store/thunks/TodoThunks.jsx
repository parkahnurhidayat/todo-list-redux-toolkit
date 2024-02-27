import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodo = createAsyncThunk("todos/add", async (todo) => {
  const res = await axios.post("http://127.0.0.1:3005/todos", todo);
  return res.data;
});

export const editTodo = createAsyncThunk("todos/edit", async (todo) => {
  const res = await axios.put(`http://127.0.0.1:3005/todos/${todo.id}`, todo);
  return res.data;
});

export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
  await axios.delete(`http://127.0.0.1:3005/todos/${id}`);
  return id;
});

export const fecthTodo = createAsyncThunk("todos/fetch", async () => {
  const res = await axios.get("http://127.0.0.1:3005/todos");
  return res.data;
});
