import React, { useState } from "react";
import Form from "./form"; // Assuming Form component is in Form.js
import Todolist from "./todolist"; // Assuming Todolist component is in Todolist.js
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter((todo) => todo.done).length;
  const totalTodo = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completed={completedTodo} total={totalTodo} />
    </div>
  );
}
