import React, { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todo1", "Todo2"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onclickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div>
        <input
          placeholder="Enter Todo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onclickAdd}>Add</button>
      </div>
      <div>
        <p>Uncomplited Todo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button>Complete</button>
                <button>Delate</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Complited Todo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button>Back</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
