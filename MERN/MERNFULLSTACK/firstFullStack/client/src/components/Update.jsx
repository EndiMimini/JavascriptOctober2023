import React, {useState, useEffect} from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const Update = (props) => {
    const navigate = useNavigate()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [student, setStudent] = useState({})
    const {id} = useParams();
   
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/person/${id}`)
        .then((res)=>{

            setStudent(res.data.user);
            
            setFirstName(res.data.user.firstName)
            
            setLastName(res.data.user.lastName)
            setAge(res.data.user.age)
            setEmail(res.data.user.email)
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])

    const navigateBack = () => {
        navigate(-1)
    }

    const updateUser = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (firstName.length <2 || lastName.length<2 || age<1 || email.length<3){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            
            axios.put(`http://localhost:8000/api/person/${student._id}`, {
                firstName,    // this is shortcut syntax for firstName: firstName,
                lastName,
                age,
                email      // this is shortcut syntax for lastName: lastName
            })
                .then(res=>{
                    console.log(res); // always console log to get used to tracking your data!
                    console.log(res.data);
                    setFirstName("");
                    setLastName("");
                    setAge(0)
                    setEmail("")
                    navigate(-1)
                })
                .catch(err=>{
                    setErrorMessage("Your api has some problems!")
                    console.log(err)})

                
        }
    }

  
    return(
        <div className="form px-3">
            <p className="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Update</h1>
            {
                errorMessage?
                <p className="red text-center">{errorMessage}</p>:
                null
            }

            <form className="w-75 m-auto" onSubmit={(e)=>updateUser(e)}>
                <div>
                    <label className="form-label">First Name: </label>
                    <input className="form-control" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  placeholder="Enter the student first name"/>
                </div>
                { firstName.length >0 && firstName.length <3?
                <p className="red">The first name should be 2 characters or more</p>:
                null
                }
                <div>
                    <label className="form-label">Last Name: </label>
                    <input className="form-control" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  placeholder="Enter the student last name"/>
                </div>
                { lastName.length >0 && lastName.length <3?
                <p className="red">The last name should be 2 characters or more</p>:
                null
                }
                
                <div>
                    <label className="form-label">Age: </label>
                    <input className="form-control" type="number" value={age} onChange={(e)=>setAge(e.target.value)}  placeholder="Enter the student age"/>
                </div>
                { age == 0?
                <p className="red">The age is required</p>:
                null
                }
                
                
                <div>
                    <label className="form-label">Email: </label>
                    <input className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter the student email"/>
                </div>
                { email.length >0 && email.length <3?
                <p className="red">The email is required</p>:
                null
                }
                
                <button className="btn btn-success mt-2">Update the student</button>
                
            </form>

            
        </div>
    )
}
export default Update;