import React, { useState,useEffect } from "react";
import Header from "./module/Header.jsx"
import Container from "./module/Container.jsx"
import Feedback from "./module/Feedback.jsx";
import Add from "./module/Add.jsx";
import Admin from "./module/Admin.jsx"
import axios from ".../.././axios";
function App() {
  const [adminTemp,setAdminTemp]=useState(1);
  let urlforrequest="https://ideasapp-backend.herokuapp.com/keeper/data";
  const [data,setData]=useState([]);
  function syn(){
    async function fetchData(){
      const req = await axios.get(urlforrequest);
      setData(req.data);
  }
  fetchData();
  }
  useEffect(()=>{
    syn();
  },);
// add [] up after comma
  return (
    <div className="App">
      <Header value={adminTemp} change={setAdminTemp}/>
      {adminTemp?<Container  Data={data}/>:null}
      {adminTemp?<Add  pdata={data} sdata={setData}/>:null}
      {adminTemp?null:<Admin/>}
      {adminTemp?null:<Feedback/>}
    </div>
  );
}

export default App;

//  solution
// useEffect(()=>{
//   setInterval(() => {
//     async function fetchData(){
// //       const req = await axios.get(urlforrequest);
//       setData(req.data);
//   }
//   fetchData();
//   }, 1400);
// },[]);