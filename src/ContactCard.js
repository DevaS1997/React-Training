import React from 'react'

const ContactCard = (props) => {
    return (
        <>
            <div className="col-md-6 pe-md-1">
                <div className="card mb-3 rounded-0 bg-primary text-white">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 mb-2 mb-md-0">
                                <img src={props.avator} alt="profile" className='w-100' />
                            </div>
                            <div className="col-md-9 ps-md-0">
                                <h5 className='card-title mb-0'>{props.first_name} {props.last_name} ({props.id})</h5>
                                <span className='small'><i className="bi bi-envelope me-1"></i>{props.email}</span>
                                <span className='mx-1'>|</span>
                                <span className='small'><i className="bi bi-telephone me-1"></i>{props.phone}</span>
                                <p className='small'><i className="bi bi-geo-alt me-1"></i>{props.city}, {props.state}, {props.country}, {props.postcode}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard