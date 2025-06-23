import React, { useContext } from 'react';
import { NoteContext } from '../../../context/notesContext/NotesContext';
import { styled } from '@mui/material/styles';

const Aside = styled('aside')({
  backgroundColor: '#0A0A0A',
  padding: 20,
  borderRadius: 10,
  border: '1px solid #00BFFF',
  maxWidth: 400,
  margin: '10px auto',
  color: '#FFFFFF',
  boxShadow: '0 4px 10px rgba(0, 191, 255, 0.3)',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const Label = styled('label')({
  marginBottom: 8,
  fontWeight: 'bold',
  color: '#00BFFF',
});

const Input = styled('input')({
  padding: '10px 12px',
  marginBottom: 20,
  borderRadius: 6,
  border: '1px solid #00BFFF',
  backgroundColor: '#121212',
  color: '#FFFFFF',
  fontSize: 16,
  '&::placeholder': {
    color: '#555',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '#00FF7F',
    boxShadow: '0 0 5px #00FF7F',
  },
});

const Button = styled('button')({
  backgroundColor: '#00BFFF',
  color: '#000',
  fontWeight: 'bold',
  padding: '12px',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 16,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0080FF',
  },
  '&:active': {
    backgroundColor: '#005bb5',
  },
});

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
    setNote({ title: "", description: "" });
  };

  return (
    <Aside>
      <Form id="formNote" onSubmit={SendNote}>
        <Label htmlFor="titleNote">Seu nome:</Label>
        <Input
          type="text"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          id="titleNote"
          placeholder="Seu nome"
          required
        />
        <Label htmlFor="descriptionNote">Avaliação</Label>
        <Input
          type="text"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
          id="descriptionNote"
          placeholder="Avaliação"
          required
        />
        <Button type="submit">
          {isEditing ? "Editar Anotação" : "Adicionar Anotação"}
        </Button>
      </Form>
    </Aside>
  );
}

export default FormNote;
