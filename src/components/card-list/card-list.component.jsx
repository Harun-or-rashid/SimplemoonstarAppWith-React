import React from "react";
import { Children } from "react";
import './card-list.styles.css';

export const CardList= props =>{

    return(<div className='card-list'>{props.human.map(human => <h2>{human.name}</h2>)}</div>)}