import { useState, useCallback } from "react";
import ReactDOM from "react-dom"; // Correct import
import Todotwo from "./Todotwo";



const Todo = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "New Todo"]);
  }, [todo]);

  return (
    <>
      <Todotwo todo={todo} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default Todo;
