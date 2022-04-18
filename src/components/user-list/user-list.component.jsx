import React from "react";
import { Children } from "react";
import {User} from "../user/user.component"
import  './user-list.styles.css';

export const UserList= props =>{

    return(<div className='user-list'>
    {props.user.map(user => (<User key={user.id} user={user}></User>))}
    </div>)}