import axios from 'axios';

import './LeaveMeeting.css';
import { useFormik } from 'formik';
import React from 'react';
import { Link, Navigate } from "react-router-dom";

function LeaveMetting() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validate: (values) => {
            let errors = {};

            if (!values.name) {
                errors.name = "Please Enter the name";
            }
        },
        //     if (!values.email) {
        //       errors.email = "Please Enter the Email";
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        //     ) {
        //       errors.email = "Please enter a valid email";
        //     }

        //     // Regular Expression - Regx

        //     return errors; 
        //   },
        onSubmit: async (values) => {
            axios.post("http://localhost:3001/create-user", values)
            Navigate(`/`);
            console.log(values)
        },
    });
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>Members</h3>
                </div>
            </div>
         

            <iframe width="560" height="315" src="https://www.youtube.com/embed/JpTDF4w-6Yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                
            </iframe>
            <div>
            
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-3">🔇Mute</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-3">🎥Start Video</button>
                <Link to="/see" class="btn btn-success mt-3 btn-sm ms-3">🡹 Share</Link>
                <Link to="/part" class="btn btn-info mt-3 btn-sm ms-3">Participants</Link>
                <Link to="/mem" class="btn btn-secondary mt-3 btn-sm ms-3">More</Link>                                                            
                <Link to="/reopen" class="btn btn-danger mt-3 btn-sm ms-4">Leave</Link>
        

               

            </div>
        </div>

    );
}

export default LeaveMetting;