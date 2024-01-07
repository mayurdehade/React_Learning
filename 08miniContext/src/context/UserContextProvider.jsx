import React from 'react'
//importing user context
import UserContext from './UserContext'

//create context provider (method)
//children is a generic name which pass as argument
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


//export 
export default UserContextProvider;