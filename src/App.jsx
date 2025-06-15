import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  // State to track the current input value for the task
  const [task, setTask] = useState("");

  // State to store the list of active (pending) tasks
  const [mytask, setMyTask] = useState([]);

  // State to store the list of completed tasks
  const [completedTask, setCompletedTask] = useState([]);

  // Function to capture the user input and update the 'task' state
  function insertTask(e) {
    let value = e.target.value;
    setTask(value);
  }

  // Function to add the current task to the task list
  function addTask() {
    if (task.trim() === "") return; // prevent adding empty task
    setMyTask((prev) => [...prev, task]); // append the new task to existing list
    setTask(""); // reset the input field
  }

  // Function to delete a specific task from the active task list
  function deleteTask(tl) {
    let afterDelete = mytask.filter((x) => x !== tl); // remove the selected task
    setMyTask(afterDelete);
  }

  // Function to mark a task as completed
  function completeTask(tl) {
    // Filter and extract the task to be marked as complete
    let completed = mytask.filter((x) => x === tl);
    let remaining = mytask.filter((x) => x !== tl);

    setMyTask(remaining); // update active tasks
    setCompletedTask((prev) => [...prev, completed[0]]); // add to completed list
  }

  return (
    <div className="main-body d-flex justify-content-center align-items-center">
      {/* Todo App Container */}
      <div className="todo_maindiv">
        <h3>My To Do List</h3>

        {/* Input field and Add button */}
        <div className="to-do-task-input">
          <div className="form-floating w-105">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your task"
              onChange={(e) => insertTask(e)}
              value={task}
            />
            <label htmlFor="floatingInput">Add your list</label>
          </div>

          {/* Add task button */}
          <button
            id="add-btn"
            className="btn btn-safe w-25"
            onClick={addTask}
          >
            +
          </button>
        </div>

        {/* Display Active Tasks */}
        <ul className="task-list">
          {mytask.map((tasks, index) => (
            <Task
              tl={tasks}
              key={index}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </ul>

        {/* Display Completed Tasks */}
        <h5>Completed Tasks</h5>
        <ul className="task-list">
          {completedTask.map((tasks, index) => (
            <Task tl={tasks} key={index} completeTask={completeTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
