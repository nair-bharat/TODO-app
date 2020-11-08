import './App.css';
import React, {useState} from 'react';
import { Button } from '@material-ui/core';
function App() {

  const [todos, setTodos] = useState(['Drink Coffee', 'Go for a Walk', 'Watch Netflix', 'Go Trekking']); //adding these values in the array
  const [input, setInput] = useState(['']); //setting the inpput as blank
  console.log(input);

  const addTodo = (event) => {

    //while clicking the button 
    //UseState will clear the state after refresh is clicked 
    event.preventDefault(); //This will prevent the refresh
    console.log('I am working');
    setTodos([...todos, input]); //pushing in the array
    setInput(''); //clearing the input after submitting enter

  }
  return (
    <div className="App">
      <h1>Hello Buddy !</h1>
      <form>
        <input value = {input} onChange = {event => setInput(event.target.value)}/>
        <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="outlined" color="primary">
          ADD
        </Button>
        {/*<button type = "submit" onClick = {addTodo}>Todo App</button> */}
        

      </form>
      
      <ul>{todos.map(todo => (<li>{todo}</li>))}</ul>

    </div>
  );
}

export default App;
