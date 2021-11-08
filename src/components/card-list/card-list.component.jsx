import React from "react";
import { Children } from "react";
import {Card} from "../card/card.component"
import  './card-list.styles.css';

export const CardList= props =>{

    return(<div className='card-list'>
        {props.human.map(human => (<Card key={human.id} human={human} ></Card>))}
        </div>)}