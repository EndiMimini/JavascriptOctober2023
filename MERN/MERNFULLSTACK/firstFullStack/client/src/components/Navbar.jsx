import React from "react";  
import { Link, useParams } from "react-router-dom";
const Navbar = (props) => {
    

    return(
        <div style={{padding:'20px', display:'flex', justifyContent:'space-around'}}>
            <Link to="/home">Home</Link>
            <Link to="/student/add">Create Student</Link>
        </div>
    )
}
export default Navbar;