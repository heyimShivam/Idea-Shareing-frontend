import React,{useState} from "react"
import "./Add.css"
import AddIcon from '@material-ui/icons/Add';
import Addcontainer from "./Addcontainer"
import { IconButton } from "@material-ui/core";

function Add(props){
    const [temp,setTemp]=useState(0);
    function addcheck(){

        if(temp===0){
            setTemp(1);
          }else{
            setTemp(0);
          }
        }
    
    return <div className="add-button">
        <div onClick={addcheck}><IconButton ><AddIcon  style={{fontSize:"45px"}}  className="addIcon"/></IconButton></div>
        <div className="styleContainer">{temp?<Addcontainer  sData={props.sdata} pData={props.pdata}refer="0" value={temp} change={setTemp}/>:null}</div>
    </div>
}
export default Add;
