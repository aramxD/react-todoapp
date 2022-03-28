import React from 'react';
import '../styles/TodoItem.css'

function TodoItem(props) {
    const onCompleteItem = () =>{
        console.log('terminaste ' + props.text)
    }
    const onDeleteItem = () =>{
        console.log('eliminaste ' + props.text)
    }


    return (
        <li className="todoItem">
            <span 
            className={`icon icon-check ${props.completed && 'icon-check--active'}`}
            onClick={onCompleteItem}
            >
                <i className={`bx ${props.completed ? 'bx-check-double ' : 'bx-check'} bx-md`} ></i> 
            </span>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="icon icon-delete "
                onClick={onDeleteItem}>
                <i className='bx bxs-x-circle bx-md ' ></i>            
                </span>
        </li>
    );
}

export { TodoItem };