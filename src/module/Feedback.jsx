import React from "react";
import "./Feedback.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningIcon from '@material-ui/icons/Warning';
function Feedback(){
    return <div className="container-fluid feedback-container">
        <div className="">
    <h3 className="heading fheading">Feedback :</h3>
    <div className="type-feedback d-flex justify-content-center">
    <form className="feedback-form ">
    <div className="text" style={{width:"100%",textAlign:"center",color:"red"}}> <WarningIcon/>  Under Construction  <WarningIcon/></div> <br></br>
    <div className="form-group">
    <input type="name" className="form-control"  placeholder="Name"></input>
  </div>
        <br></br>
  <div className="form-group">
    <input type="email" className="form-control"  placeholder="name@example.com"></input>
  </div>
  <br></br>
<div className="form-group">
    <textarea className="form-control"  rows="3" placeholder="Feedback / Review"></textarea>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Save</button>
</form>
    </div>
    </div>
    </div>
}
export default Feedback;