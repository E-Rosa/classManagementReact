import { useState } from 'react';
import './EditPopUp.css';
export function EditPopUp(props){
    const [input, setInput] = useState('');
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(input)
    }
    return (
        <form id='editPopUp-container' onSubmit={handleSubmit}>
            <input id='editPopUp-input' type='text' onChange={handleChange}></input>
            <button type='submit'>Submit</button>
        </form>
    )
};

