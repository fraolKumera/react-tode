import React, {useState}from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
      
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };

    
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };
     

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete
          }
          return todo;
        })
        setTodos(updatedTodos);
      }
    

  return (
    <div>
        <img src='./logo.png' alt='BitApps' class="logo"/>
    <h1>Whats The Plan for Today?</h1>
    <TodoForm onSubmit={addTodo} />
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    <div class="footer">
    <p>© Copyright <a href="https://bitappstech.com">BitApps Tech </a> - 2022. All Rights Reserved</p>
</div>
    </div>

  )
  
}

export default TodoList