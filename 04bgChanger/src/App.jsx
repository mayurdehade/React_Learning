import {useState} from 'react'
function App() {
  //useState
  const [color, setColor] = useState('skyblue');

  // let colorSetter = function (){
  //   setColor('red');
  // }

  //create new state for change the background color of bar to black when background is white
  const [bcolor, setBcolor] = useState('white');
  

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl px-3 py-2" style={{backgroundColor: bcolor}}>
              <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}}>Red</button>
              <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}}>Green</button>
              <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}}>Blue</button>
              <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor: "yellow"}}>Yellow</button>
              <button onClick={() => {setColor("black"); setBcolor('white')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "Black"}}>Black</button>
              <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "purple"}}>Purple</button>
              <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "Olive"}}>Olive</button>
              <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "orange"}}>Orange</button>
              <button onClick={() => {
                //two function is called
                setColor('white'); setBcolor('black');
              }} className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor: "white"}}>White</button>
              <button onClick={() => setColor("navy")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "navy"}}>Navy</button>
              <button onClick={() => setColor("lime")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "lime"}}>Lime</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
