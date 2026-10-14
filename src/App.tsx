import { useState } from "react";
import "./App.css";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  date : string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (text === "") return;
  const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      date: new 
      Date().toLocaleDateString()
    };
    setTodos([...todos, newTodo]);
    setText("");
  };
   const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>Add</button>
      <ul>
  {todos.map((todo) => (
    <li key={todo.id} className="task">
      <div className="task-info">
        <p>{todo.text}</p>
        <small>📅 {todo.date}</small>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="delete">
        Delete
      </button>
      <button onClick={() => completeTodo(todo.id)} className="complete">
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;