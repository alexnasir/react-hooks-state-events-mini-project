import React from "react";
import Task from "./Task";


function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
