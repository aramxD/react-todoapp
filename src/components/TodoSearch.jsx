import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch(){
    const onSearchValueChange= (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    const [searchValue, setSearchValue] = React.useState('')
    
    return(
        <div>
        <input 
            className="todoSearch" 
            placeholder="cebolla"
            value = {searchValue} 
            onChange={onSearchValueChange}/>
            
        <p>{searchValue}</p>
        </div>
    );
}

export { TodoSearch };