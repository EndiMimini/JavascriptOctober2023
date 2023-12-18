import React, {useState} from "react";  
import Display from "../components/Display";
import Navbar from "../components/Navbar";

const Home = (props) => {
    const [studentList, setStudentList] = useState([]);
    return(
        <>
        
            <Navbar />
            <Display studentList={studentList} setStudentList={setStudentList}/>

        </>
            
    )
}
export default Home;