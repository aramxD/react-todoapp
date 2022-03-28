import React from 'react';
import '../styles/TodoCounter.css'

function TodoCounter({total, completedTodos} ){
     
    return(
        <p className='todoCounter'> Has completado {completedTodos} de {total} ToDos</p>
    );
}

export { TodoCounter };