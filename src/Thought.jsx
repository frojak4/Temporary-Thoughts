import React, {useEffect} from 'react';

function Thought(props){

    useEffect(() => {
        const timeout = setTimeout(() => {props.removeThought(props.id)}, 10000);

        return() => {
            clearTimeout(timeout);
        }
    },[]);

    return(
        <div className="thought">
            <h3>{props.text}</h3>
            <button onClick={() => props.removeThought(props.id)}>Delete</button>
        </div>
    )
}

export default Thought;