
import { useQuery } from "@tanstack/react-query";
import { UpdateName } from "./User"
import { useContext } from "react"
import { Appcontext } from "../App"

export const Home=(props)=>{
   const getCat=async ()=>{
     return await fetch("https://catfact.ninja/fact")
     .then((response)=>response.json())
     .then((data)=>{
      
      return data;
     });
     
   };
  const {userName}=useContext(Appcontext);
  const result= useQuery({queryKey:['cat'],queryFn: getCat});
if(result.isError)
{
 return  <h3> There is a error</h3>
}
if( result.isLoading)
{
 return  <h3>Loding...</h3>
}


   return( 
      <div>

   <h3>{result.data?.fact}</h3>
   <UpdateName />
   </div>
   )
}