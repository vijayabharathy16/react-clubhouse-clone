import axios from 'axios';
// import './App.css';
import './Chat.css';
import './Participants.css';
import './LeaveMeeting.css';

import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';

function Chat() {
  const formik =useFormik({
    initialValues:{
     passcode : "",
      name : "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.passcode) {
        errors.passcode = "Please Enter the Passcode";
      }
      if(!values.name){
        errors.name ="Please Enter the Name";
      }
      return errors;
  },

 
    onSubmit: async (values) => {
        axios.post("http://localhost:3001/create-user",values)
        Navigate(`/`);
       console.log(values)
    },
});
  // useEffect(async() =>{
  //  let users = await axios.get("http://localhost:3000/users")
  //  setUsers(users.data)
  // },[]);
  return (
    <>  
      <div className='container'>
       <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-6'>
                <label>Passcode</label>
                <input type="number" onChange={formik.handleChange} value ={formik.values.passcode} name ="passcode" placeholder='Enter the Passcode' className='form-control' />
                {
                  formik.errors.passcode ? <span>{formik.errors.passcode}</span> : null
                }
              </div>

              <p> Join with a personal link Name</p>
             
              <div className='col-lg-6'>
             
                <label>Name</label>
                <input type="text" onChange={formik.handleChange} values={formik.values.name} name="name" placeholder='Enter the Name' className='form-control' />
                {
                  formik.errors.name ? <span>{formik.errors.name}</span> : null
                }
               
                <Link to="/meeting" className='btn btn-success mt-3'>Join meeting</Link>
                
              </div>
              
              <p1>If you received an invitation link,top on the link to join the meeting</p1>
              <h5>JOIN OPTIONS</h5>
              <div className="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Don't Connect To Audio</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Turn off My Video</label>
              </div>
             

            </div>
          </div>
        
        </div>
        

        </form>
      </div>
   
    </>

  )
}

export default Chat;