import React, { useEffect, useContext } from 'react'
import Routing from './Router.jsx'
import { DataContext } from "./Components/DataProvider/Dataprovider";
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firebase';





function App() {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
      // console.log('The user is >>>  ', authUser );
    })
      

  }, [])


  return (
    <>
      <Routing />  
    </>
  )
}

export default App
