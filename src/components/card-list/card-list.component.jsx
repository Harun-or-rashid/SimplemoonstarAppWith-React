import React from "react";
import { Children } from "react";
import {Card} from "../card/card.component"
import  './card-list.styles.css';

export const CardList= props =>{

    return(<div className='card-list'>
        {props.filteredMonster.map(monstar => (<Card key={monstar.id} monstarv={monstar} ></Card>))}
        </div>)}