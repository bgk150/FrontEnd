import React from 'react';
import '../App.css'
function Todolist() {

    
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
      setTodo(event.target.value);
  }

  const addTodo = () => {
      setTodos([todo, ...todos]);
      setTodo('');
  }

    return(
        <div>
            <input value={todo} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {
                        todos.map(item => <tr><td>{item}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}


export default Todolist;