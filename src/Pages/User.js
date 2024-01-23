import { useState,useContext } from "react"
import { Appcontext } from "../App";
import{CustomerName,ReName,ResetName} from "../store";
import{useDispatch} from "react-redux"

export const User=(props)=>{
//props is an js object that will pass has an component parameter,
// props represent data that we might pass to component
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.Email}</p>
        </div>
    );
}

export const UpdateName=(props)=>{
 const {setName}=useContext(Appcontext);
    const [newName,setNewName]=useState();
    const dispatch=useDispatch();
    return(
        <div>
            {/* <input type="text" name="name" onChange={(event)=>setNewName(event.target.value)}></input>
            <button onClick={(event)=>{setName(newName)}}>Update</button> */}

            <input type='text' name='name' placeholder="Name" onChange={(e)=>setNewName(e.target.value)}></input>
            <button onClick={()=>{dispatch(CustomerName({userName:newName}))}}>submit</button>
            <button onClick={()=>{dispatch(ResetName())}}>Clear</button>
            <input type="text" placeholder="Retype Name" onChange={(e)=>setNewName(e.target.value)}></input>
            <button  onClick={()=>{dispatch(ReName({userName:newName}))}}>Re-Enter Name</button>
        </div>
    );
}