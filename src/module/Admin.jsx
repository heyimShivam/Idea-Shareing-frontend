import React from "react";
import "./Admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/shivam.png"
function Admin(){
    return <div className="adminContainer">
    <div className="container-fluid admininfo">
        <div className="row d-flex justify-content-center "><img src={logo} alt="shivam"className="adminImage"></img></div>
        <div className="row"><div className="col d-flex justify-content-center"><div className="heading">Shivam Chaudhary</div></div></div>
        <div className="row"><div className="col"><p className="adminContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quod consequuntur deserunt quaerat maxime eum facilis aperiam inventore accusamus ad debitis mollitia maiores praesentium natus odio magnam excepturi molestias quasi modi voluptate consequatur delectus asperiores! Amet obcaecati laboriosam suscipit quibusdam reprehenderit. Explicabo aut rerum hic nulla amet molestias. Excepturi sed laboriosam quis autem quo nam, iure praesentium aliquid, quam, eius temporibus ullam! Dolores inventore qui est quo itaque reprehenderit velit.</p></div></div>
    </div>
    </div>
}
export default Admin;