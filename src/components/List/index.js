import React from "react";
import "./style.css";
import ViewBtn from "../Viewbtn/view"
import SaveBtn from "../Savebtn/Save";
import DeleteBtn from "../DeleteBtn/index";
// import SaveBtn from "../Savebtn/Save";

// This file exports both the List and ListItem components

export function List({ children }) {

    return (
      <div className="list-overflow-container">
      <h2 className="ml-3 my-3">Search Results</h2>
      <ul className="list-group mx-2">{children}</ul>
    </div>
    )
  }

export function ListItem(props) {
var button;
  if(props.pg === "Search") {
    (
      button = <SaveBtn saveButton={props.saveButton} />
    )
  }
  else if(props.pg === "Saved") {
    button = <DeleteBtn deleteButton={props.deleteButton} />
  }

  return <li className="list-group-item">
    <div><h3>{props.title}</h3>
      <div>
        <ViewBtn link={props.link} />
        {button}
      </div>
    </div>
    <div style={{ fontSize: '1.5rem' }}>{props.author}</div>
    <div className="d-flex flex-row">
      <div className="p-2">
        <img src={props.cover} alt="cover" />
      </div>
      <div>{props.synopsis}</div>
    </div>
  </li>;
}
