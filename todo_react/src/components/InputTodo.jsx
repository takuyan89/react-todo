import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div>
      <input placeholder="Enter Todo" value={todoText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default InputTodo;
