import {useState } from "react";

export const Todoform = ({onAddTodo}) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (value) => {
    setinputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault()
   onAddTodo(inputValue)
   setinputValue("")
  };

  return (
    <section className="Form-box">
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
  );
};
