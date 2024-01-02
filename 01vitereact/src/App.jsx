import One from './one'
function App() {

  const username = "Mayur";

  return (
    //you only export one element
    //fragment
    //{} evaluated expression -> treat as variable
    //evaluated expression -> only write final output 
    <> 
      <One/>
      <h1>Happy New Year 2024 {username}</h1>
    </>
    
  )
}

export default App
