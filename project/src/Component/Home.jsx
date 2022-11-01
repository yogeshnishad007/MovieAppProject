
import React  from "react";
import {Change} from "../Context/Context"

import {useContext} from "react"
  function Home(){
         const nam=useContext(Change)
    return(
        <div>
            <h1>Home</h1>
            <p>My Name:{nam}</p>
        </div>
    )
  }

  export default Home;