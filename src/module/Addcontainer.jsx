import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Addcontainer.css";
import axios from ".../.././axios";
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import { IconButton } from "@material-ui/core";
// import Card from "./Cards.jsx"

function Addcontainer(props){
 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  if(props.refer==="1"){
    setTitle(props.person.title);
    setContent(props.person.content)
  }
  const [obj,setObj]=useState({});

  function submitClicked(){  
    // updateReal();
    if(title !== ""){
      if(content!==""){
        
        setTimeout(function(){axios.post('https://ideasapp-backend.herokuapp.com/keeper/data',{title:title,content:content}).then(response => {}); }, 1300);
        
        // <div className="check"><Card person={obj}/></div>
 
      }
    }
      
    
  }    
// function updateReal(){
//   setObj({
//     title: title,
//     content: content
//     });
// }


  function cross(){
    if(props.value===1){
      props.change(0);
    }
  }

    return <div className="additem" >
        <div className="row"><div className="col"><span><h2 style={{float:"left",marginLeft:"40px",marginTop:"49px",color:"white"}}>Add Notes  :</h2></span><span onClick={cross} style={{float:"right",marginRight:"25px",marginTop:"35px"}}><IconButton><ClearIcon  style={{color:"white",fontSize:"35px"}}/></IconButton></span></div></div>
        <form className="addArea">
  <div className="form-group">
    <input type="name" className="form-control" name="title" onChange={event => setTitle(event.target.value)}  placeholder="Title" value={title}></input>
  </div>
  <br></br>
  <div className="form-group">
    <textarea className="form-control" name="content" onChange={event => setContent(event.target.value)} placeholder="Add Text"  rows="5" value={content}></textarea>
  </div>
  <br></br>
  <div className="form-group">
  <div className="form-check form-check-inline">
  <input className="form-check-input red" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input green" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input blue" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input white" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
</div>
</div>
  <br></br>
  <br></br>
  <div onClick={submitClicked}><IconButton ><SaveIcon  style={{fontSize:"40px",color:"white"}}/></IconButton></div>
</form>
    </div>
}
export default Addcontainer;