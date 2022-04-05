import './App.css';
import React, {useEffect, useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';

function App() {

  {/*
  const [todos, setTodos] = useState(['Drink Coffee', 'Go for a Walk', 'Watch Netflix', 'Go Trekking']); //adding these values in the array 

  //Here we are hardcoding the values which we really dont want 
*/}

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(['']); //setting the input as blank
  console.log(input);

  //When the app is loaded we want the app to listen to the db and update the values accordingly
  useEffect(() => {
    
    //This code fires when the app.js loads
    db.collection('todos').onSnapshot( snapshot => {

      console.log(snapshot.docs.map(doc => doc.data()));
      //setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
    }, []);

  const addTodo = (event) => {

    
    event.preventDefault(); 
    console.log('I am working');
    setTodos([...todos, input]); 
    setInput(''); 

  }
  return (
    <div className="App">
      <h1>So it's time to add some TODOS!</h1>
      <form>

        <FormControl>
        <InputLabel>Write a TODO!</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="outlined" color="primary">
          ADD
        </Button>
        

      </form>
      
      <ul>
        {todos.map(todo => (
          
          <Todo text = {todo} />
          )
        )
        }
      </ul>

    </div>
  );
}

export default App;
