import { useState } from "react";
import "./index.css";
function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = e => {
    setUserInput(e.currentTarget.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="qosh">
      <header>To DO list</header>
      <div className="qosh2">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="kiriting"
        />
        <button className="btn-qosh">Add</button>
      </div>
    </form>
  );
}
export default ToDoForm;
