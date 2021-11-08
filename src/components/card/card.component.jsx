import React from "react";
import './card.styles.css';

export const Card = props=>{
   return( 
       <div className="card-container">
        
           <img alt='' src={'https://robohash.org/${props.human.id}?set=set2&Ssize=180*180'} />
          <h1> {props.human.name}</h1>
       </div>
   )
}


