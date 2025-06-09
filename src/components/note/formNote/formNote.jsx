import React, { useContext, useState } from 'react'
import { NoteContext } from '../../../context/notesContext/NotesContext'
import { Description } from '@mui/icons-material'
import "./formNote.css"

function FormNote() {
    const {
      addNote,
      note,
      setNote,
      isEditing,
      setEditing,
      idEdit,
      setIdEdit,
      editNote,
    } = useContext(NoteContext);
  
    const SendNote = (e) => {
      e.preventDefault();
      if (isEditing) {
        editNote(idEdit);
      } else {
        addNote(note.title, note.description);
      }
      setEditing(false);
      setIdEdit("");
      setNote({title: "", description: ""});
    };
  
    return (
      <aside className="aside-notes">
        <form id="formNote" onSubmit={SendNote}>
          <label htmlFor="titleNote" className="margin-form">
            {" "}
            Título
          </label>
          <input
            type="text"
            value={note.title}
            onChange={(e) => setNote({...note, title: e.target.value})}
            id="titleNote"
            placeholder="Título"
          />
          <label htmlFor="descriptionNote" className="margin-form">
            {" "}
            Descrição
          </label>
          <input
            type="text"
            value={note.description}
            onChange={(e) => setNote({...note, description: e.target.value})}
            id="descriptionNote"
            placeholder="Descrição"
          />
          <button type="submit" id="buttonForm" className="margin-form">
            {isEditing ? "Editar Anotação" : "Adicionar anotação"}
          </button>
        </form>
      </aside>
    );
  }
  
  export default FormNote;
  