
import {User} from "./User.js";
import { useState, useEffect,useContext } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Appcontext } from "../App.js";
import React from "react";
// App component is the first component that is displayed 
//when the application is loaded

export const Addition=()=> {
  // setUserData is a function which is usee to set data for userData
  // to set initial data for useData pass data as parameters to useState function
const[userData,setUserData]= useState();
const {userName}=useContext(Appcontext);
useEffect(()=>{ 
   fetch("https://localhost:7045/api/User")
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
  setUserData(data);
 
});},[]);

const [name, setName] = useState("");
const [count, setCount] = useState(0);
useEffect(()=>{
  // this block will be executed when the component is mounted and 
  // when ever the component is executed
  console.log("component Mounted");
  // return is executed when the component is unmounted 
  // is executed to clear the mess we created in component
  return ()=>{
    console.log("component UnMounted");
  }
},[name]);

// in  use effect we can specify the stat for which the useEffect should
// execute
const onNameChange=(event)=>{
  setName(event.target.value);

}



  const users=[
    {name: 'John', age: 36},
    {name: 'Raju', age:24}
  ];
  const Increase=()=>{
    setCount(count+1);
  }
  return (
    <div className="name">
      <h1>My name is {userName}</h1>
      {/* {userData.map((user,key)=>{
        return <User name={user.name} Email={user.email}/>
      })} */}
      <input type='text' onChange={onNameChange}/>{name}
      <div>
      <button onClick={Increase}>Increase</button>
      <button onClick={()=>{setCount(count-1);}}>Descrese</button>
      <button onClick={()=>{setCount(0 );}}>Zero</button>
       {count}
       </div>
       
    </div>
  
  );
}

// const User = (props) => {
//   const isGreen=true;
//   return (
//     <div>
//       <h1 style={{color: isGreen? "green": "red"}}>{props.name}</h1>
//       <h2>{props.age}</h2>
//     </div>
//   );
// };

