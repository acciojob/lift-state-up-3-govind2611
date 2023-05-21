import React, { useState } from 'react';
import Child from './Child';
const ParentComponent=()=>{
    const [selectedOption,setSelectedOption]=useState('');

    const handleButtonClick=(option)=>{
        setSelectedOption(option);
    };


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child option="Option 1" onButtonClick={handleButtonClick} ></Child>
            <Child option="Option 2" onButtonClick={handleButtonClick} ></Child>
            <p>Selected Option: {selectedOption}</p>
            
        </div>
    )
}
export default ParentComponent;