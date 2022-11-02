import React from "react";
import "./ToDoList.css";
const ToDoList = (props) =>{


    return (
    <>
    <div>
    <li><i className="bi bi-x-circle-fill delete_item" onClick={() => {props.onSelect(props.id)}} ></i> {props.items} </li>
    </div>
    </>
    );
};

export default ToDoList;