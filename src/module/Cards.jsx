import React from "react";
import "./Cards.css";
import DeleteIcon from '@material-ui/icons/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconButton } from "@material-ui/core";
import axios from "axios";
function Cards(props){
  function deleteContainer(){
    axios.post('https://ideasapp-backend.herokuapp.com/keeper/delete',{_id:props.person._id}).then(response => {});
  }
    return <div className="container-fluid">
      <div className="row d-flex justify-content-center">
<div className="col">
<div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.person.title}</h5>
      <div className="card-text card-content">{props.person.content}</div>
      <p className="card-text" onClick={deleteContainer}><IconButton ><DeleteIcon  className="card-delete"/></IconButton></p>
    </div>
  </div>
</div>
  </div>
    </div>
}
export default Cards;




