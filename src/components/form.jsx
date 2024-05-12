import React, { useState } from "react"; // Import React
import styles from "./todo.module.css"; // Import your CSS styles

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false }); // Initialize todo state

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    setTodos([...todos, todo]); // Add new todo to the todos array
    setTodo({ name: "", done: false }); // Reset todo input
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.moduleInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })} // Update todo state with input value
          placeholder="Enter your todo..."
        />
        <button className={styles.moduleButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
