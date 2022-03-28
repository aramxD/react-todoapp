import React from 'react';
import '../styles/TodoItem.css'

function TodoItem(props) {
    // Esta funcion dummy ya no es necesaria, podemos llamar a la funcion directo de props
    // const onCompleteItem = () =>{
    //     completeTodos(props.text)
    //     console.log('terminaste ' + props.text)
    // }
    // const onDeleteItem = () =>{
    //     console.log('eliminaste ' + props.text)
    // }


    return (
        <li className="todoItem">
            <span 
            className={`icon icon-check ${props.completed && 'icon-check--active'}`}
            onClick={props.onComplete}
            >
                <i className={`bx ${props.completed ? 'bx-check-double ' : 'bx-check'} bx-md`} ></i> 
            </span>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="icon icon-delete "
                onClick={props.onDelete}>
                <i className='bx bxs-x-circle bx-md ' ></i>            
                </span>
        </li>
    );
}

export { TodoItem };