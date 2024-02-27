/** @format */

import React, { useEffect } from "react";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fecthTodo } from "../store/thunks/TodoThunks";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  useEffect(() => {
    dispatch(fecthTodo());
  }, [dispatch]);
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
