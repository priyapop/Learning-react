import { useState } from "react";

export const Todoform = ({ onAddTodo }) => {
  const [inputValue, setinputValue] = useState({});

  const handleInputChange = (value) => {
    setinputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setinputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="Form-box">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
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
  );
};
