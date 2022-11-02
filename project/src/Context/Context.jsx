
import React, { useEffect, useState }  from "react";

const Change = React.createContext();

function Context({children}){
  const [data,setData]=useState([])

  const getdata= async ()=>{
    const res= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=titanic`);
    const data = await res.json();
    setData(data.Search)
    console.log("data",data.Search)
  }

  useEffect(()=>{
      getdata()
  },[])
       
  return(
      
        <Change.Provider value={data}>
          {children}
        </Change.Provider>
      
  )
}

export {Change,Context};