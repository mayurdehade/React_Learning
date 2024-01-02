//Create custom function to render html element using javascript
//passing two values reactElement -> element values in key value pair to create html 
//tag and container -> to render reactElement to that container
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    /*
    //manually 
    //problem -> if you want to add multiple attributes then this not works it is not optimal
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    */

    //using for loop
    //create a loop for add multiple attributes
    for(const prop in reactElement.props){
        //checking if the prop is equal to child element then continue
        //if children property is there then skip it
        if(prop == 'children') continue;
        //add attribute to domElement
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

//Create object which stores the all the required values to create custom tag
//Key value pair
const reactElement = {
    type: 'a',
    //properties
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    //text value (text node)
    children: 'Click me to visit google'
}

//selecting html element
const mainContainer = document.querySelector('#root');

//method for render element to html file
customRender(reactElement, mainContainer)


