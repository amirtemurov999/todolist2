import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./index.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("amir") || "[]")
  );

  const addTask = userInput => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([newItem, ...todos]);
      localStorage.setItem("amir", JSON.stringify([newItem, ...todos]));
    }
  };

  const removeTask = id => {
    const buff = [...todos.filter(todo => todo.id !== id)];
    setTodos(buff);
    localStorage.setItem("amir", JSON.stringify(buff));
  };

  const handleToggle = id => {
    const bufer = [
      ...todos.map(
        todo =>
          todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ];
    setTodos(bufer);
    localStorage.setItem("amir", JSON.stringify(bufer));
  };

  return (
    <div className="App">
      <ToDoForm addTask={addTask} />
      <div className="container">
        {todos.map(todo => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              handleToggle={handleToggle}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
