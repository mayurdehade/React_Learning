import {useEffect, useState} from "react"

//custom hook syntax
// function hello(){
//     return []
// }

//create custom syntax
//currency value is passed into useCurrencyInfo hook
function  useCurrencyInfo(currency) {
    //hold data
    const [data, setData] = useState({})

    //if currency value is change then it automatically load and call to api
    //api value is in form of string
    useEffect(() => {
        //fetch api data
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //convert response to json
        .then((res) => setData(res[currency])) //get value of currency into data using setData loop
        console.log(data);
    
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;