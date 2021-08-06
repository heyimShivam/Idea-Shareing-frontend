
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { IconButton } from "@material-ui/core";
function Header(props){
    function change(){
        if(props.value===0){
            props.change(1);
        }else{
            props.change(0);
        }
    }
    return <div className="header">
         <div className="header-item">
             <h2><strong style={{marginLeft:"16px"}}>Idea's Shareing App<span style={{fontSize:"40px"}}><EmojiObjectsIcon style={{fontSize:"40px",color:"white"}}/></span></strong></h2>
         </div>
         <div className="header-item header-login" onClick={change}>
             <IconButton  className="login">
             <PersonIcon   style={{fontSize:"35px",color:"white"}}/>
             </IconButton>
            </div>
    </div>
}
export default Header;