import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  //useState() for length of password and default length is 9
  const [length, setLength] = useState(8);
  //useState() for numbers false -> not allowed, true -> allowed
  const [numberAllowed, setNumberAllowed] = useState(false);
  //useState() for characters false -> not allowed, true -> allowed
  const [characterAllowed, setCharacterAllowed] = useState(false);
  //useState() for default password value (automatically generated) (initial value)
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null);

  //useCallback (memories in memory)
  //Call useCallback at the top level of your component to cache a function definition between re-renders
  //use for memoise (store in cache memory)

  //Creating password generator method 
  //useCallback(function, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "@#$%&*!~`.^+_-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += (str.charAt(char));
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,20);
    //copy value from window object
    window.navigator.clipboard.writeText(password);
  }, [password])

  //useEffect Hook: useEffect is a React Hook that lets you synchronize a component with an external system.
  //automatically run on page load and any change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, setPassword])

  const clicked = () => {
    copyPasswordToClipBoard();
    alert("Copied!");
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4">
        <h2 className="text-center text-white my-3">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3" 
          placeholder="Password" 
          readOnly 
          ref={passwordRef}/>
          {/* 
          Copy Button 
          //useRef Hook: returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
          */}
          <button onClick={clicked} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-950 duration-400">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              //onChange and update the value of length using setLength
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"

              //change the value onchecked and unchecked
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id="numberInput"

              //change the value checked and unchecked
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
