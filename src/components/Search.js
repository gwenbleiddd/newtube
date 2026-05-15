import React, { useState } from 'react'
import {ImSearch} from 'react-icons/im'


const Search = ({onSubmit}) => {
  const[input,setInput] = useState(' ');

  

  const collectInput = (e) =>{
       setInput(e.target.value);
  }
  const sendInput = e =>{
     e.preventDefault();
     onSubmit(input);
    
  }

 
  
   
  return (
    
    <div>
     
      {/* <h1>Search section</h1> */}
       
      <form onSubmit={sendInput}> 
        <input type='text'name='word' placeholder='Search...' onChange={collectInput}></input>
        <button><ImSearch size={15}/></button>
      </form>
    </div>
  )
}

export default Search
