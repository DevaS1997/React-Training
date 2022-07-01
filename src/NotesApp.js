import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { MdSearch } from "react-icons/md";
import Note from './Note';
import './index.css'

const NotesApp = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "this is first notes",
            date: "13/04/2022"
        },
        {
            id: nanoid(),
            text: "this is second notes",
            date: "14/04/2022"
        },
        {
            id: nanoid(),
            text: "this is tgird notes",
            date: "15/04/2022"
        },
    ])
    const [remainingText, setRemainingText] = useState(200)
    const [text, setText] = useState('')
    const [searchText, setSearchText] = useState('')
    const charText = 200;
    const handleChange = (e) => {
        if (e.target.value.length <= 200) {
            let remainingChar = charText - e.target.value.length;
            setRemainingText(remainingChar);
            setText(e.target.value);
        }
    }
    const handleAddNote = (text) => {
        const date = new Date()
        const addNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNote = [...notes, addNote];
        setNotes(newNote);
        setText('');
        setRemainingText(charText);

    }


    const handleDelete = (id) => {
        const newNote = notes.filter((notes) => notes.id !== id);
        setNotes(newNote);
    }
    const handleSearchText = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        const saveNotes = JSON.parse(localStorage.getItem('react-app-notes'))
        if(saveNotes)
        {
            setNotes(saveNotes);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('react-app-notes', JSON.stringify(notes));
    }, [notes])

    return (
        <>
            <div className='container mt-4'>
                <div className="input-group mb-3 p-0">
                    <span className="input-group-text cursor-pointer alert alert-secondary p-2 fs-4"><MdSearch /></span>
                    <input type="text" id='id_search' onChange={(e) => { handleSearchText(e) }} className="form-control alert alert-secondary p-2 border-start-0" placeholder="Search......" />
                </div>
                <Note notes={notes.filter((notes) => notes.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} text={text} handleDelete={handleDelete} handleChange={handleChange} handleAddNote={handleAddNote} remainingText={remainingText} />
            </div>
        </>
    )
}

export default NotesApp;