import React,{ useState, useEffect} from 'react'
import styles from './Todo.module.css'
import axios from 'axios'

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    axios.get(url).then((res) => {
      setTodos(res.data.slice(0, 30));
    });
  })
  return (
    <div className={styles.container}>
      <h1>Todo</h1>
      {todos.map((todo) => (
        <div>
          <p>{todo.id}. {todo.title} {todo.completed === false ? <input type="checkbox"/> : <input type="checkbox" checked/>}</p>  
        </div>
      ))}
      </div>
  )
}

export default Todo