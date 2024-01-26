import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What do you want to pack?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Pack Item
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
