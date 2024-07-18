import React, {useState, useEffect} from 'react';
import Input from './Input.jsx';
import Thought from './Thought.jsx';
import './App.css';

function App() {

  const [thoughts, setThoughts] = useState([]);

  

  const generateId = () => {
    return thoughts.length ? Math.max(...thoughts.map(thought => thought.id)) + 1 : 0;
  };

  function addThought(thought){
    const newId = generateId()
    setThoughts(t => [...t, {id: newId, text: thought}])
    
  }

  function removeThought(currentid){
    const newThoughts = thoughts.filter((thought) => thought.id !== currentid);
    setThoughts(newThoughts);
  }

  return (
    <div className="container">
      <div className="header">
        Temporary Thoughts
      </div>
      <Input addThought={addThought}/>
      <div className="thoughts">
        {thoughts.map((thought, index) => 
        <Thought text={thought.text} id={thought.id} key={thought.id} removeThought={removeThought}/>)}
      </div>
    </div>
  );
}

export default App;
