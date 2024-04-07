import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const Note = ({id,text,date, handleDeleteNote}) => {
    return(
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteOutline onClick={()=> handleDeleteNote(id)} 
                className='delete-icon'/>
            </div>
        </div>
    );
};
export default Note;