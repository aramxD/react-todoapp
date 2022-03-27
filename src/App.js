import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import './App.css';

const todos = [
  { text: 'hablar al medico', complete: false },
  { text: 'comer fruta', complete: false },
  { text: 'correr 5 k', complete: false },
  { text: 'Terminar modelo prologic', complete: false }]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}

      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
