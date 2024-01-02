import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing card components
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  //passing object as propss
  let myObj = {
    username: "mayur",
    age: 21
  }
  //passing array as props
  let newArry = [1,2,3,4,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl font-extrabold mb-5'>Tailwind test</h1>

      <Card username="Mayur" someObj={myObj} btnText="Visit me"/>
      <Card myArry={newArry}/>
      
    </>
  )
}

export default App
