
import React, { useContext }  from "react";
import { Change } from "../Context/Context";
import "../index.css"

function Movies(){
       const movie= useContext(Change)
       console.log(movie,"dataa")
  return(
    <>
    <h1> Movies</h1>
      <div  className="box">
          
          {
            movie.map((el)=>{
              return(
                <div >
                    <div className="card" >
                    <b>{el.Title}</b>
                    <p>{el.Year}</p>
                    <h4>{el.Type}</h4>
                  
                  <img src={el.Poster} alt={el.imdbID} />
                  </div>
             
                </div>
              )
            })
          }
      </div>
      </>
  )
}

export default  Movies;