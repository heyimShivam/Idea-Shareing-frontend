import React from "react";
import "./Container.css";
import Card from "./Cards.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';

function Container(props){
    
    function display(event){
    return <div className="check" key={event._id}><Card  person={event}/></div>
    }
    return <div className="check-main">    

{props.Data.map(display)}
    </div>
}
export default Container;