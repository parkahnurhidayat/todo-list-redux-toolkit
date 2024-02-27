/** @format */

import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/thunks/TodoThunks";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const edit = { ...todo, completed: !todo.completed };
    dispatch(editTodo(edit));
  };
  return (
    <li className={`todo-item ${todo.completed ? "checked" : ""}`}>
      <div onClick={handleClick} className="todo-text">
        {todo.text}
      </div>
      <div
        className="todo-delete"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <GrClose />
      </div>
    </li>
  );
};

export default TodoItem;
