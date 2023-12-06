"use client";
// src/App.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleComplete,
} from "../../lib/redux/slices/todoSlicer";
import { RootState } from "@/lib/redux/store";
import Container from "../Container";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import Input from "../Input";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.list);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      }),
    );
    setNewTodo("");
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <ul className="flex w-full flex-col justify-between gap-4">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className={`flex w-full justify-between gap-4 rounded-lg bg-black p-2 ${
              todo.completed ? "bg-black bg-opacity-20" : ""
            }`}
          >
            <span
              className={`rounded-lg p-2 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <span className="flex gap-2 text-3xl">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="transition-all duration-500"
              >
                {todo.completed ? <CiSquareCheck /> : <CiStop1 />}
              </button>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="text-red-900 transition-all duration-500 hover:text-red-950"
              >
                <FaRegTrashAlt />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Input
        onChange={(e: any) => setNewTodo(e.target.value)}
        value={newTodo}
        placeholder="Enter Todo"
        type="text"
        name="todo"
      />
      <button onClick={handleAddTodo} className="w-full bg-black p-2">
        Add Todo
      </button>
    </Container>
  );
}

export default Todo;
