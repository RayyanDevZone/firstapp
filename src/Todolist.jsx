import React, { useState, useEffect } from "react";
import "./App.css";

function Todolist() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function character(e) {
    setValue(e.target.value);
  }

  function add() {
    if (value.trim() !== "") {
      setTodos((todos) => {
        const updatedlist = [...todos, value];
        setValue("");
        return updatedlist;
      });
    }
  }

  function removeActivity(id) {
    const updatedlistData = todos.filter((item, i) => id !== i);
    setTodos(updatedlistData);
  }

  function deleteAll() {
    setTodos([]);
  }

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TO DO LIST </h1>
          <br />
          <input
            type="text"
            placeholder="Add Your Tasks"
            value={value}
            id="inputry"
            onChange={character}
          />{" "}
          <button id="button" onClick={add}>
            ADD
          </button>
        </div>
        <p className="List-heading">Here Is Your List:</p>

        {todos.length > 0 &&
          todos.map((item, id) => (
            <div className="container">
              <div id="list-data" key={id}>
                <div className="list-item">{item}</div>
                <button id="btn" onClick={() => removeActivity(id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

        {todos.length > 0 && (
          <button id="remove" onClick={deleteAll}>
            REMOVE ALL
          </button>
        )}
      </div>
    </>
  );
}

export default Todolist;

// inputBox.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) { // 13 is the keycode for "Enter"
//       event.preventDefault();
//       addTask();
//     }
