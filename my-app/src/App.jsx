import { useState } from 'react';
import './App.css'
// import Button from './components/Button';
// import Todos from './components/Todos';
// import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);
  const [newTodo, setNewTodo] = useState('')

  console.log(todos);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    console.log(e);
    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('')
    
  }


  return (
   <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button type='submit'>Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />

   </div>
  )
}

export default App
