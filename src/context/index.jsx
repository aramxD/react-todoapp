import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false);

  //funcion para contar los elementos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Aqui esta el codigo del buscador de To Do's
  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }




  //Aqui va la logica para el boton de completado
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //Identifica el index del elemento a completar
    const newTodos = [...todos] //Crea una nueva variable con todos los To Do's
    if (newTodos[todoIndex].completed) { //Reviza si el item seleccionado es true
      newTodos[todoIndex].completed = false
    } else {
      newTodos[todoIndex].completed = true // Cambia la variable completed a true
    }
    saveTodos(newTodos) //envio nuevi listado de todos
  }

  //Aqui va la logica para el boton de completado
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //Identifica el index del elemento a eliminar
    const newTodos = [...todos] //Crea una nueva variable con todos los To Do's
    newTodos.splice(todoIndex, 1)// Elimina el elemento

    saveTodos(newTodos) //envio nuevi listado de todos
  }

  return (
    <TodoContext.Provider
    value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}