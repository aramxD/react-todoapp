import React from 'react'
//import './App.css';

const todos = [
  { text: 'hablar al medico', complete: false },
  { text: 'comer fruta', complete: false },
  { text: 'correr 5 k', complete: false },
  { text: 'Terminar modelo prologic', complete: false }]


function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      <h2>has completado 2 de 3 To Do's</h2>
      {/* <TodoSearch /> */}
      <input placeholder="cebolla" />
      {/* <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}

      </TodoList>
      <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
