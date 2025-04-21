import React, { useState } from 'react'
import { TokenContext } from './TokenContext'

const TokenContextProvider = ({children}) => {
    const [userToken , setUserToken]=useState()
  return (
    <TokenContext.Provider value={{
        userToken ,
        setUserToken
    }
    }>
     {children} 
    </TokenContext.Provider>
  )
}

export default TokenContextProvider
