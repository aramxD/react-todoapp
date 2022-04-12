import React from 'react';
import '../styles/CreateTodoButton.css'
import { TodoContext } from '../context'

function CreateTodoButton(props) {
    const { openModal } = React.useContext(TodoContext)
    const onClickCreateTodo = () => {
        if (openModal) {
            props.setOpenModal(false)
        } else {
            props.setOpenModal(true)
        }
    }
    return (
        <button className='createTodoButton'
            onClick={onClickCreateTodo}>
            <i className='bx bx-plus' ></i>
        </button>
    );
}

export { CreateTodoButton };