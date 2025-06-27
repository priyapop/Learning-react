import { useState } from "react";
import "./index.css";
import { Todoform } from "./form";
import { TodoList } from "./todolist";
import { Datetime } from "./datetime";
export const TodoApp = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) {
    //   return;
    // }
    const ifTodoContentMatched = task.find(
      (currentTask) => currentTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  const handleDelete = (value) => {
    //task.splice(setTask,1)
    const updatedTask = task.filter(
      (currentTask) => currentTask.content != value
    );
    setTask(updatedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  const handleChecked = (content) => {
    const updatedTask = task.map((currentTask) => {
      if (currentTask.content === content) {
        return { ...currentTask, checked: !currentTask.checked };
      } else {
        return currentTask;
      }
    });
    setTask(updatedTask);
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
          {task.map((currentTask) => {
            return (
              <TodoList
                key={currentTask.id}
                data={currentTask.content}
                checked={currentTask.checked}
                onHandleDelete={handleDelete}
                onHandleChecked={handleChecked}
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
