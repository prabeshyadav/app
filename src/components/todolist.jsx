import React from "react"; // Import React
import TodoItems from "./todositems"; // Assuming TodoItems is the correct component name
import styles from "./todolist.module.css";

export default function Todolist({ todos, setTodos }) {
  const SortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done)); // Correct the sorting function

  return (
    <div className={styles.list}>
      {SortedTodos.map((items, index) => (
        <TodoItems
          key={index}
          items={items}
          todos={todos}
          setTodos={setTodos}
        /> // Pass todo item as prop, renamed from items to todo
      ))}
    </div>
  );
}
