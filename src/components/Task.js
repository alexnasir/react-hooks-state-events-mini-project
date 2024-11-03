import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDelete = () => onDeleteTask(task.text);
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <p>{task.text} - {task.category}</p>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
