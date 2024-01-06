import React from 'react'
import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mayurdehade')
    //     .then(response => response.json())
    //     .then(data => {setData(data)});
    // }, [])

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="text-center text-xl bg-gray-600 text-white p-3 flex justify-center">
        <img src={data.avatar_url} alt="" className="mr-5 h-52" />
        <h3>
        Github Followers: {data.followers} <br/>
        User Id: {data.login}
        </h3>
        </div>
    )
}

export default Github

//optimize way to load data
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mayurdehade')
    return response.json()
}
