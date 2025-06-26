import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

export const TodoApp = () => {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setinputValue(value);
  };

  const handleDelete = (value) => {
    //task.splice(setTask,1)
    const updatedTask = task.filter((currentTask)=> currentTask != value)
    setTask(updatedTask)
  }

    const handleDeleteAll = () => {
    setTask([])
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setinputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setinputValue("");
  };
useEffect (() =>{
const interval= setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  }, 1000);
  return () => clearInterval(interval)
},[])
 

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add task
            </button>
          </div>
        </form>
      </section>
      <section className="unorderList">
        <ul>
          {task.map((currentTask, index) => {
            return (
              <li className="todo-item" key={index}>
                <span>{currentTask}</span>
                <button className="check-btn">
                  <IoMdCheckmark />
                </button>
                <button className="delete-btn" onClick={() =>handleDelete(currentTask)}>
                  <MdOutlineDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleDeleteAll}>Clear all</button>
      </section>
    </section>
  );
};
