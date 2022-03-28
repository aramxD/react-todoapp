import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
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