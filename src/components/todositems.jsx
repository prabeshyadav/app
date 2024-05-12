import Todo from "./todo";
import styles from "./todoitems.module.css";

export default function TodoItems({ items, todos, setTodos }) {
  function handledelete(itemToDelete) {
    setTodos(todos.filter((todo) => todo.name !== itemToDelete.name));
    console.log(itemToDelete);
  }

  function handleclick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = items.done ? styles.complete : "";
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <span className={className} onClick={() => handleclick(items.name)}>
          {items.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(items)}
            className={styles.Delete}
            type="submit"
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
