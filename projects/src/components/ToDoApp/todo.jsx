import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

export const TodoApp = () => {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setinputValue(value);
  };

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

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* date */}
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
                <button className="delete-btn">
                  <MdOutlineDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
