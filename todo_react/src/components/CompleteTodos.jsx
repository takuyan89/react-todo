import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <div>
        <p>Complited Todo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>Back</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
