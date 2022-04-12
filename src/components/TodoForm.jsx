import React from "react";
import { TodoContext } from "../context";
import '../styles/TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { createTodo, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {

        setOpenModal(false)

    }
    const onSubmit = (event) => {
        event.preventDefault();
        createTodo(newTodoValue)


        setOpenModal(false)

    }
    return (
        <div className="TodoForm">
            <h2>Agregar un To Do..!</h2>

            <form onSubmit={onSubmit}>
                <label htmlFor="">Escribe tu To Do..!</label>
                <textarea
                    name="textArea"
                    id="textArea"
                    cols="30"
                    rows="10"
                    placeholder="Crear nuevo To Do..!"
                    value={newTodoValue}
                    onChange={onChange}></textarea>
                <div>
                    <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                        Cancel
                    </button>
                    <button type="submit" className="TodoForm-button TodoForm-button--add">
                        Enviar
                    </button>
                </div>
            </form>

        </div>
    )
}
export { TodoForm };