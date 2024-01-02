import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//create new custom function to add element in react app
function  MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
};

//it cause error
//syntax is defined by user (not matched to react syntax)
const reactElement = {
    type: 'a',
    //properties
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    //text value (text node)
    children: 'Click me to visit google'
};


//create element 
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
);

const anotherUser = 'Mayur second';

//React syntax
//React Render
const reactElement2 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  //it directly insert mayur second
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
    <App />
    {MyApp()}
    {anotherElement}
    {reactElement2}
    
  </>
);

//Error
// reactElement 



//React use bundler to improve the syntax, convert syntax
//Parsing - function parse and convert it into object format
