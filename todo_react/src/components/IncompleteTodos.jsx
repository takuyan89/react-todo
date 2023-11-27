import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <div>
        <p>Incomplited Todo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
