import { useState } from "react";
import './index.css'
import { Todoform } from "./form";
import { TodoList } from "./todolist";
import { Datetime } from "./datetime";
export const TodoApp = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return;
    }
    setTask((prev) => [...prev, inputValue]);
  };

  const handleDelete = (value) => {
    //task.splice(setTask,1)
    const updatedTask = task.filter((currentTask) => currentTask != value);
    setTask(updatedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <Datetime />
      </header>
      <Todoform onAddTodo={handleFormSubmit} />
      <section className="unorderList">
        <ul>
          {task.map((currentTask, index) => {
            return (
              <TodoList
                key={index}
                data={currentTask}
                onHandleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleDeleteAll}>
          Clear all
        </button>
      </section>
    </section>
  );
};
