import React, { useState } from 'react';


const Child=({option,onButtonClick})=>{
    return(
        <div className='child'>
           <button onClick={()=>onButtonClick(option)}>{option}</button>
        </div>
    )
}

export default Child;