import React from "react";
import { Children } from "react";

export const CardList= props =>{
    {console.log(props.human.map(huma=>huma.email))}
    return(<div>Y {props.human.map(humans => <h3>{humans.name}</h3>)} </div>)}