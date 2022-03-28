import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
// import './App.css';

const todosDefault = [
  { text: 'Crear tu primer To Do..', completed: false },
  { text: 'Eliminar el primer To Do..', completed: false },
  { text: 'Correr 5 k', completed: false },
  { text: 'Comer frutas y verduras', completed: false }]


function App() {
  const [todos, setTodos] = React.useState(todosDefault)
  const [searchValue, setSearchValue] = React.useState('')

  //funcion para contar los elementos completados
  const  completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  //Aqui esta el codigo del buscador de To Do's
  let searchedTodos = []

  if(!searchValue.length>=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }


  //Aqui va la logica para el boton de completado
  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text); //Identifica el index del elemento a completar
    const newTodos = [...todos] //Crea una nueva variable con todos los To Do's
    if(newTodos[todoIndex].completed){ //Reviza si el item seleccionado es true
      newTodos[todoIndex].completed=false
    }else{
      newTodos[todoIndex].completed = true // Cambia la variable completed a true
    }
    setTodos(newTodos) //envio nuevi listado de todos
  }

    //Aqui va la logica para el boton de completado
    const deleteTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text); //Identifica el index del elemento a eliminar
      const newTodos = [...todos] //Crea una nueva variable con todos los To Do's
      newTodos.splice(todoIndex, 1)// Elimina el elemento
      
      setTodos(newTodos) //envio nuevi listado de todos
    }


  return (
    <React.Fragment>
      <TodoCounter 
        total = {totalTodos}
        completedTodos = {completedTodos}
      />
      

      <TodoSearch 
        searchValue ={searchValue}
        setSearchValue = {setSearchValue}
        />
      
      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete ={()=> completeTodo(todo.text)}
            onDelete= {()=> deleteTodo(todo.text)} />
        ))}

      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
