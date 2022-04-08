import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickCreateTodo = () => {
        props.setOpenModal(true)
    }
    return(
        <button className='createTodoButton'
        onClick={onClickCreateTodo}>
            <i className='bx bx-plus' ></i>
        </button>
    );
}

export { CreateTodoButton };