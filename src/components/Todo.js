import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
        style={{ cursor: "pointer" }}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
