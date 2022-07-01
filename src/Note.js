import React from 'react'
import AddNote from './AddNote';
const Note = ({ notes, handleChange, remainingText, handleAddNote, text, handleDelete }) => {
    return (
        <>
            <div className="row">
                {notes.map((notes, index) => {
                    return (
                        <div className='col-md-4 mb-3' key={index}>
                            <div className="card bg-warning">
                                <div className="card-body">
                                    <p className='mb-5'>{notes.text}</p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='small mb-0'>{notes.date}</p>
                                        <i className="bi bi-trash h5" onClick={()=>{handleDelete(notes.id)}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <AddNote handleChange={handleChange} text={text} remainingText={remainingText} handleAddNote={handleAddNote} />
            </div>
        </>
    )
}

export default Note;