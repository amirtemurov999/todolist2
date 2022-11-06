function ToDo({ todo, removeTask, handleToggle }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-x" onClick={() => removeTask(todo.id)} />
    </div>
  );
}

export default ToDo;
