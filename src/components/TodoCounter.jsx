import React from 'react';
import '../styles/TodoCounter.css'
import {TodoContext} from '../context'

function TodoCounter( ){
     const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <p className='todoCounter'> Has completado {completedTodos} de {totalTodos} ToDos</p>
    );
}

export { TodoCounter };