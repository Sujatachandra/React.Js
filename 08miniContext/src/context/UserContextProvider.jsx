import React from 'react'
import UserContext from './UserContext'

// create an userContextProvider method 
// we will take the prop in a parenthesis 
// jo vi aaa raha h use age pass karo 
const UserContextProvider =({children}) => {
    const[user, setUser] = React.useState(null)
    return(
        // jo v aa raha h use as it is age pass karo 
        // we also need to mentaion that which value we are passing through the userContext provider 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// export the function 
export default UserContextProvider;