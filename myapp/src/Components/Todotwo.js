import { memo } from "react";
import Todo from "./Todo";

const Todotwo= ({ todo, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todo.map((Todos, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todotwo);
