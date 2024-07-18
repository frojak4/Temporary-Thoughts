import React, {useEffect} from 'react';

function Thought(props){

    useEffect(() => {
        const timeout = setTimeout(() => {props.removeThought(props.id)}, 5000);

        return() => {
            clearTimeout(timeout);
        }
    },[props.id, props.removeThought]);

    return(
        <div className="thought">
            <h3>{props.text}</h3>
            <button onClick={() => props.removeThought(props.id)}>Delete</button>
        </div>
    )
}

export default Thought;