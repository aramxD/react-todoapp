import React from 'react'
import { TodoContext, TodoProvider } from './context/index'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal'

// const todosDefault = [
//   { text: 'Crear tu primer To Do..', completed: false },
//   { text: 'Eliminar el primer To Do..', completed: false },
//   { text: 'Correr 5 k', completed: false },
//   { text: 'Comer frutas y verduras', completed: false }]

function App() {



  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          }) => ( <>
            <TodoList >
              {error && <p>Hay un error, reinicia</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {(!loading && !searchedTodos.length) && <h4>Crea tu primer todo..!</h4>}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)} />
              ))}

            </TodoList>
          

            {!!openModal && (
              <Modal>
              <TodoForm />
            </Modal>
            )}
            
            <CreateTodoButton 
              setOpenModal={setOpenModal}
              />
            </>
        )}
        </TodoContext.Consumer>

        

      </React.Fragment>
    </TodoProvider>


  );
}

export default App;
