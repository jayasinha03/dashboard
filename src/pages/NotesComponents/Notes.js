import {useState} from 'react';
import {nanoid} from 'nanoid';
import './Notes.css';
import NotesList from './NotesList';

const Notes=()=>{
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: "first note",
        date: "3/20/2024",
    },
    {
        id: nanoid(),
        text: "second note",
        date: "3/20/2024",
    },
    ]);

    const addNote = (text) =>{

        const date = new Date();
        const newNote={
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) =>{
        const newNotes= notes.filter((note)=>note.id !== id);
        setNotes(newNotes);
    }

    return(
        <div className='notes'>
            <div className='heading'>Notes</div>
            <NotesList notes={notes} 
            handleAddNote={addNote}
            handleDeleteNote = {deleteNote}/>
        </div>
    );
}
export default Notes;