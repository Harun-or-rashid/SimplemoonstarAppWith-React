import React from "react";
import { Children } from "react";
import './user.style.css';

export const User= props=>{
return (<div className="user-container">
    {/* <h4>{props.user.name}</h4> */}
    {/* <h4>{props.user.name.map(names=>(<li>{names}</li>))}</h4> */}
    {/* {props.user.map(users=>(<li>key={users.id} users={users.name}</li>))} */}
    <h4>{props.user.name}</h4>
{/* {props.user.map(users=>(<div>{users.name}</div>))} */}
</div>);
}