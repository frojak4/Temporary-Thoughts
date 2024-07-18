import React, {useState} from 'react';

function Input(props){


    const [text, setText] = useState("");

    function handleTextChange(event){
        setText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        if(text.length > 0) {
            props.addThought(text);
            setText("");
    }
    }

    return(
    <form className="inputs" onSubmit={handleSubmit}>
            <input 
            placeholder="Enter your thought" 
            type="text"
            value={text}
            onChange={handleTextChange}/>
            <input
            type="submit"
            className="submit"/>
    </form>
    )
}

export default Input;