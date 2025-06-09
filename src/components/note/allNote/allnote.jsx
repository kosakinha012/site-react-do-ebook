import React, { useContext } from 'react'
import { NoteContext } from '../../../context/notesContext/NotesContext';
import Note from '../noteCard/NoteCard';
import "./allNote.css"

function AllNotes() {
  const {notes} = useContext(NoteContext);
  return (
    <div className="AllNotes">
      {notes.map((n) => (
        <Note key={n.id} {...n} />
      ))}
    </div>
  );
}

export default AllNotes;
