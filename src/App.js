import React, {useState, useEffect} from 'react';
import Input from './Input.jsx';
import './App.css';

function App() {

  const [thoughts, setThoughts] = useState([]);

  function addThought(thought){
    setThoughts(t => [...t, thought])
  }

  return (
    <div>
      <Input addThought={addThought}/>

      {thoughts.map((thought) => 
      <h3>{thought}</h3>)}
    </div>
  );
}

export default App;
