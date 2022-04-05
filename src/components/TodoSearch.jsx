import React from 'react';
import { TodoContext } from '../context';
import '../styles/TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange= (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    
    
    return(
        <div>
        <input 
            className="todoSearch" 
            placeholder="Buscar To Do's"
            value = {searchValue} 
            onChange={onSearchValueChange}/>
            
        
        </div>
    );
}

export { TodoSearch };