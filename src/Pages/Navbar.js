import {Link} from 'react-router-dom';
import {useSelector } from "react-redux";
export const Navigation=()=>{
    const CustomerName=useSelector((state)=>state.user.value.userName)
    return(
    <div><Link to="/">Home</Link>
    <Link to="/addition">Addition</Link>

    <h1>{CustomerName} </h1>
    </div>
    )
}