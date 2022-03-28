import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
// import './App.css';

const todos = [
  { text: 'hablar al medico', completed: true },
  { text: 'comer fruta', completed: false },
  { text: 'correr 5 k', completed: true },
  { text: 'Terminar modelo prologic', completed: false }]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}

      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
