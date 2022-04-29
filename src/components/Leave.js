import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, Navigate } from 'react-router-dom';

function Leave() {
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
                                    <label>ID</label>
                                    <input type="number" placeholder='Meeting ID' className='form-control' />
                                </div>

                                <p> Join with a personal link Name</p>

                                <div className='col-lg-6'>

                                    <label>Name</label>
                                    <input type="text" onChange={formik.handleChange} values={formik.values.name} name="name" placeholder='Enter the Name' className='form-control' />

                                    <Link to="/meeting" className='btn btn-success mt-3'>Join meeting</Link>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Leave;