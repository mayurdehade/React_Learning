//to use the useState hook, we first need to import it
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Hooks: React hooks is used for update UI in react
//UI updation controlled by react
function App() {

  //useState() return one variable and one function
  //if counter is changed then it automatically update counter in all places
  let [counter, setCounter] = useState(0); //you can pass any value into useState()

  // let counter = 5;

  //update value
  const addValue = () => {
    console.log("value added", counter);
    // counter = counter+1;
    setCounter(counter+1)
  }

  //remove value
  const removeValue = () => {
    //if value is 0 then stop
    if(counter > 0){
      setCounter(counter-1);
    }
  }


  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
