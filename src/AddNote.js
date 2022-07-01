const AddNote = ({ handleChange, remainingText, handleAddNote, text }) => {
    return (
        <div className='col-md-4'>
            <div className="card alert alert-success">
                <div className="card-body pb-0">
                    <textarea value={text} name="notestext" className="form-control bg-transparent border-0 mb-2" id="notestext" cols="30" rows="2" placeholder="Type your notes........." onChange={handleChange}></textarea>
                    <div className='d-flex justify-content-between'>
                        <p className='small mb-0'>{remainingText} remaining</p>
                        <button className="btn btn-primary btn-sm pb-0" onClick={() => { handleAddNote(text) }}>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNote;