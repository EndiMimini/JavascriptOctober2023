import React, {useEffect} from "react";  
import { Link } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
    const {studentList, setStudentList}= props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
        
        setStudentList(res.data.users);
        
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])

    const deleteStudentById = (idFromBelow) => {

        setStudentList(studentList.filter((student, index) => student.id !== idFromBelow));
    }
    
    return(
            <div className="resultDiv">
                <h2>Here are all the students: </h2>

                {
                    studentList.length>0?
                    studentList.map((student, index)=>{
                        return(
                            <div className="results p-2" key={index}>
                                <p>Full name: <Link to={`/student/${student._id}`}> {student.firstName} {student.lastName}</Link></p>
                                <p>Age: {student.age}</p>
                                <p>Email: {student.email}</p>
                                <p>Member since: {student.createdAt}</p>
    
                                {/* <button onClick={(e)=>deleteStudentById(student.id)}>Delete Student</button> */}
                            </div>
                        )
                    }
                ):
                <div>

                    <p>There are no students yet!</p>              
                    <Link to="/student/add">Create One</Link>
                </div>
                }
            </div>
    )
}
export default Display;