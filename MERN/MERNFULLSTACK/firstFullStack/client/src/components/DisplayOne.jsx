import React, {useEffect, useState} from "react";  
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {
    
    const [student, setStudent] = useState([{}])
    const {id} = useParams();
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/person/${id}`)
        .then((res)=>{
        
            setStudent(res.data.user);  
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])

    const deletePerson = (personId) => {
        axios.delete(`http://localhost:8000/api/person/${id}`)
            .then(res => {
                navigate(-1)
            })
            .catch(err => console.log(err))
    }
    // const deleteStudentById = (idFromBelow) => {
    //     setStudentList(studentList.filter((student) => student.id !== idFromBelow));
    //     navigate('/home')
    // }
    return(
        <div className="card w-50 m-auto">
                {
                <div class="card-body">
                    <div className="d-flex justify-content-evenly">
                    <h5 class="card-title">Full name: {student.firstName} {student.lastName}</h5>
                    <Link to={`/student/edit/${student._id}`}> Edit</Link>
                    </div>
                 
                  <p class="card-text">Age: {student.age}</p>
                  <p class="card-text">Email: {student.email}</p>
                  <button onClick={deletePerson} class="btn btn-danger">Delete</button>
                </div>
            }
        </div>
            
          

                
      
    )
}
export default DisplayOne;