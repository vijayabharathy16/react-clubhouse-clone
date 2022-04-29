import React from 'react'

import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
function More() {
    const formik = useFormik({
        initialValues: {

            name: "",
        },
        onSubmit: async (values) => {
            axios.post("http://localhost:3001/create-user", values)
            Navigate(`/`);
            console.log(values)
        },
    });
    return (
        <>
            <div className='container'>

                <div className="row">
                    <div className='col-lg-12'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                  
                                    <nav class="navbar navbar-light bg-light">
                                        <div class="container-fluid">
                                            <a class="navbar-brand"><span style={{color:"blue"}}>Close</span></a>
                                            <a class="navbar-brand">Chat</a>
                                            <a class="navbar-brand">🔔</a>


                                        </div>
                                    </nav>
                                    <ul class="list-group ">
                                        <p1>From Arul S to Everyone</p1>
                                        <li class="list-group-item list-group-item-secondary mt-1">guys, session will start in 2 minus kindly wait</li>
                                        <p1>From Raguv Kumar V to Everyone</p1>
                                        <li class="list-group-item list-group-item-success mt-3">http://developer.mozilla.org/en-us/docs/Web/HTTP/status
                                        </li>
                                        <li class="list-group-item list-group-item-primary mt-2">http://docs.google.com/presentation/1M3mdrcKoM9teldUib7RJ_7iqLK6pU/edit?usp=sharing
                                        </li>
                                        <li class="list-group-item list-group-item-secondary mt-1">http://github.com/</li>
                                        <li class="list-group-item list-group-item-success mt-1">http://github.com/new</li>
                                        <li class="list-group-item list-group-item-danger mt-1">http://www.netlify.com/</li>
                                        <li class="list-group-item list-group-item-warning mt-1">http://unruffled-yonath-1ce78e.netlify.app/</li>
                                        <li class="list-group-item list-group-item-info mt-1"> Break for 10mins</li>
                                        <li class="list-group-item list-group-item-light mt-1">http://opensource.com/article/18/10/common-network-ports</li>
                                        <p1>From Gopi M to Everyone</p1>
                                        <li class="list-group-item list-group-item-secondary mt-1">Thank you sir 😊</li>
                                    </ul>
     
                                    <p1 className=" btn btn-light mt-2">Send to: <span style={{color:"blue"}}>Arul S ▼</span></p1>
                                    <form class="d-flex">
                                   
                                        <input class="form-control me-2 mt-1" type="search" placeholder="Tap here to chat" aria-label="Search" />
                                        <button class="btn btn-secondary mt-1 sm-2" type="submit">Send</button>
                                    </form>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

export default More;