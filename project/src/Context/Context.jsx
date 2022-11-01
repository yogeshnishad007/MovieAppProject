
import React  from "react";

const Change = React.createContext();

function Context({children}){
  
       
  return(
      
        <Change.Provider value="yogi">
          {children}
        </Change.Provider>
      
  )
}

export {Change,Context};