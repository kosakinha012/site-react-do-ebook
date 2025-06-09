import React, { createContext, useState } from "react";
import { generateRandomId } from "../../helpers/generateRandomld";
import { mockNotes } from "../../mock/mockNote";
import { generateAtualDate } from "../../helpers/generateAtualDate";


const NoteContext = createContext();

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([...mockNotes]);
  const [note, setNote] = useState({title: "", description: ""});
  const [isEditing, setEditing] = useState(false);
  const [idEdit, setIdEdit] = useState("");
  const addNote = (title, description) => {
    setNotes([
      ...notes,
      {id: generateRandomId(), description, title, date: generateAtualDate()},
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const editNote = (id) => {
    setNotes(
      notes.map((n) => {
        if (n.id === id) {
          return {...note, id: id, date: generateAtualDate()};
        } else {
          return n;
        }
      })
    );
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        note,
        setNote,
        isEditing,
        setEditing,
        idEdit,
        setIdEdit,
        editNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export {NoteProvider, NoteContext};

