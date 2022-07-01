import React, { useState } from 'react'

const Registration = () => {

    const [value, setvalue] = useState({
        first_name: '',
        last_name: '',
        email: '',
    })

    const [submitted,setsubmitted] = useState(false)
    const [valid,setvalid] = useState(false)

    const handleFirstName = (e)=>{
        setvalue({...value,first_name : e.target.value})
    }

    const handleLastName = (e)=>{
        setvalue({...value,last_name : e.target.value})
    }

    const handleEmail = (e)=>{
        setvalue({...value,email : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value.first_name && value.last_name && value.email)
            setvalid(true)
        setsubmitted(true)
    }
    return (
        <>
            <h2 className='text-center my-4'>Registration</h2>
            <div className="d-flex justify-content-center">
                <div className="col-4">
                    <div className="card shadow-sm border-1">
                        <div className="card-body">
                            {submitted && valid ? <div className='alert alert-success' role='alert'>successfully submitted!</div> : null }
                            <form method='post' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" onChange={handleFirstName} id="firstname" placeholder="First Name" />
                                    {(submitted && !value.first_name) ? <span className='text-danger mt-2 d-block'>First Name is required</span> : null }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" onChange={handleLastName} id="lastname" placeholder="Last Name" />
                                    {(submitted && !value.last_name) ? <span className='text-danger mt-2 d-block'>Last Name is required</span> : null }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" onChange={handleEmail} id="email" placeholder="Email" />
                                    {(submitted && !value.email) ? <span className='text-danger mt-2 d-block'>Email is required</span> : null }
                                </div>
                                <div className='d-grid'>
                                    <button className='btn btn-success'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration