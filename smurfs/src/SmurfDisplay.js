import React, { useContext } from "react";
import { SmurfContext } from "./SmurfContexts";
import axios from "axios";

function SmurfDisplay(props) {
  const smurfs  = useContext(SmurfContext);
  console.log(smurfs)
  const removeSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log("Removed:", res))
      .catch(function(error) {
        console.log(error);
      });
  }; 

  return (
  
    <div>
      <h1>A list of my smurfs</h1>
      {props.smurfs && props.smurfs.map(smurf =>
          <>
               <h1 key={smurf.id}>{smurf.name}</h1>
               <p>{smurf.age} {smurf.height}</p>
               <button 
               onClick={() => removeSmurf(smurf.id)}>
               Remove Smurf
               </button>
          </>            
          )
        }
    </div>
   
  );
}

export default SmurfDisplay;