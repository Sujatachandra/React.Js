import React from 'react'

// there is one method called createContext which will create the context
// we will not pass anything within the method parameter 
// every context is a provider because end of the day they will provide variables to us 
// we will wrap all the components within the usercontext then we will have the access to get those components  from the userContext 
// in tis way the usercontext will be a provider 
// context is like a global variale nothing else 

const UserContext = React.createContext()

// export the variable in the output 
export default UserContext;  