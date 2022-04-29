import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function Participants() {
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
                                  
                                     <h6>Participants : 10</h6>
                                    <ul class="list-group ">
                                    <li class="list-group-item mt-3">😊 Vijay Me 🔇</li>                               
                                   
                                  <li class="list-group-item list-group-item-success mt-3">🐱 Divya 🔇🎥</li>                  
                                        <li class="list-group-item list-group-item-primary mt-2">🔥 Chitra 🔇🎥</li>
                                        <li class="list-group-item list-group-item-secondary mt-1">👂 Gopi 🔇🎥</li>
                                        <li class="list-group-item list-group-item-success mt-1">🌝 Nalini 🔇🎥</li>
                                        <li class="list-group-item list-group-item-danger mt-1">🐂 Jaga 🔇🎥</li>
                                        <li class="list-group-item list-group-item-warning mt-1">😁 Subi 🔇🎥</li>
                                        <li class="list-group-item list-group-item-info mt-1">🥴 Ganesh 🔇🎥</li>
                                        <li class="list-group-item list-group-item-light mt-1">❤️ Mano 🔇🎥</li>
                                        <li class="list-group-item list-group-item-secondary mt-1">👲 ArulKumar 🔊 🎥 recording on</li>
                                    </ul>
                                   
                                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                      
                                        <div class="container-fluid">
                                      </div>
                                    </nav>
                                    {/* <Link to="/part" className='btn btn-success mt-'>Participants</Link> */}
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Participants;