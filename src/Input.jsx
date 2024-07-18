import React, {useState} from 'react';

function Input(props){


    const [text, setText] = useState("");

    function handleTextChange(event){
        setText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.addThought(text);
        setText("");
    }

    return(
    <form onSubmit={handleSubmit}>
            <input 
            placeholder="Enter your thought" 
            type="text"
            value={text}
            onChange={handleTextChange}/>
            <input
            type="submit"/>
    </form>
    )
}

export default Input;