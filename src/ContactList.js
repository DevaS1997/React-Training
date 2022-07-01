import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'

const ContactList = () => {
    const [contact, setcontact] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5&?nat=in')
            .then(response => response.json())
            .then((result) => {
                setcontact(result.results)
            })
    }, [])

    return (
        <>
            <div className="container mt-4">
                <div className="row">

                    {
                        contact.map((result, index) => {
                            return (
                                <ContactCard key={index}
                                    id={result.id.name}
                                    avator={result.picture.large}
                                    first_name={result.name.first}
                                    last_name={result.name.last}
                                    phone={result.cell}
                                    email={result.email}
                                    city={result.location.city}
                                    state={result.location.state}
                                    country={result.location.country}
                                    postcode={result.location.postcode}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default ContactList