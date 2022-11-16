import React, { useContext, useState } from "react";
import Store from "../context";
import '../App.css';

export default function TodoForm() {
  const { dispatch } = useContext(Store);
  const href_bookmark_url = window.location.href;
  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState(href_bookmark_url);

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div>
      <div>
        <br />
        <div>
          <input 
            className="bookmark_get_url"
            value={todo}
            autoFocus={true}
            placeholder="Enter next item"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <div>
            <button className="btn-primary" onClick={handleTodoAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
