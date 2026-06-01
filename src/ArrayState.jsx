import { useState } from 'react';

function ArrayState() {
  const [todos, setTodos] = useState(["Coding", "Study"]);
  
  function addTodo() {
    setTodos(prev => [...prev, "New Todo"]);
  }
  
  return (
    <>
      {todos.map((todo, index) =>
      (<p key={index}>{todo}</p>))}
      
      <button onClick={addTodo} className="counter__button">Add todo</button>
    </>
  )
}

export default ArrayState;