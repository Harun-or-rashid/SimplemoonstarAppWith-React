import React from "react";
import './card.styles.css';

export const Card = props=>{
   return( 
       <div className="card-container">
        
           <img alt='' src={'https://robohash.org/${props.monstarv.id}?set=set2&Ssize=180*180'} />
          <h1> {props.monstarv.name}</h1>
          <p>{props.monstarv.email}</p>
       </div>
   )
}


