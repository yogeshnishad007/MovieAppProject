
import React  from "react";
import {useParams} from "react-router-dom"


function Single(){
    const {id}=useParams();
       
  return(
      <div>
          <h1> Single Movies id: {id}</h1>
      </div>
  )
}

export default Single ;