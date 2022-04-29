import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, Navigate } from 'react-router-dom';

function Share() {
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
            {/* <div class="card btn btn-dark text-dark bt-sm ms-5" style={{width:"50rem"}}>
                <form onSubmit={formik.handleSubmit}>
                    <img src="https://wallpaperaccess.com/full/1595911.jpg/150x200" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </form>
            </div>  */}

            {/* <div class="youtube-player" data-id="C4sptqFb0Bk" style="height: 0px; padding-bottom: 56.25%;">
                <div data-id="C4sptqFb0Bk" tabindex="0">
                <form onSubmit={formik.handleSubmit}>
                    <img src="//i.ytimg.com/vi/C4sptqFb0Bk/hqdefault.jpg" />
                    <div class="play">
                    <img src="https://assets.zoom.us/images/en-us/desktop/generic/in-meeting/share-screen-controls.png" alt=""/>
                    </div>
                    </form>
                </div>
               
            </div> */}
              <form onSubmit={formik.handleSubmit}>
            <svg class="bd-placeholder-img bd-placeholder-img-lg card-img btn btn-dark " width="100%" height="500" color="black" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false">
          
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="black">
                </rect>
                <text x="50%" y="50%" fill="white" fontSize="30" dy=".3em">Mano
                </text>
               
            </svg>
            <button type="button" class="btn btn-dark mt-3 btn-sm ms-3">🔇Mute</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-3">🎥Start Video</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">Security</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">Polls</button>
                <button type="button"  class="btn btn-success mt-3 btn-sm ms-5">🡹 Share</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">Participants</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">More</button> 
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">😊 Reaction</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">report</button>   
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">Apps</button>
                <button type="button" class="btn btn-dark mt-3 btn-sm ms-5">Record</button>                                                                          
                <Link to="/stop" class="btn btn-danger mt-3 btn-sm ms-5">Stop Share</Link>

               
            </form>
        </>
    )
}

export default Share;