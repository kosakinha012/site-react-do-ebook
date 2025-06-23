import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { NoteContext } from "../../../context/notesContext/NotesContext";
import { styled } from '@mui/material/styles';

const NoteContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#0A0A0A',
  border: '1px solid #00BFFF',
  borderRadius: 8,
  padding: 20,
  position: 'relative',
  color: '#FFFFFF',
  boxShadow: '0 4px 6px rgba(0, 191, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 191, 255, 0.3)',
  },
  minWidth: 400,
  marginTop:50
}));

const Title = styled('h3')({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#00BFFF',
  wordBreak: 'break-word',
});

const Description = styled('p')({
  marginBottom: 15,
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap', // mantém quebras de linha do texto
  color: '#ccc',
  maxHeight: 120,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const DateText = styled('div')({
  fontSize: '0.75rem',
  color: '#666',
  textAlign: 'right',
  fontStyle: 'italic',
});

const ActionButton = styled('button')({
  position: 'absolute',
  top: 15,
  padding: 6,
  borderRadius: 5,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 191, 255, 0.1)',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px #00BFFF',
  },
});

const EditButton = styled(ActionButton)({
  right: 50,
});

const DeleteButton = styled(ActionButton)({
  right: 15,
});

function Note({ title, description, date, id }) {
  const { deleteNote, setEditing, setNote, setIdEdit } = useContext(NoteContext);

  function SubmitToEdit() {
    setEditing(true);
    setNote({ title, description });
    setIdEdit(id);
  }

  return (
    <NoteContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <EditButton onClick={SubmitToEdit} title="Editar nota" aria-label="Editar nota">
        <BiSolidEdit fontSize={23} color="#00BFFF" />
      </EditButton>

      <DeleteButton onClick={() => deleteNote(id)} title="Excluir nota" aria-label="Excluir nota">
        <BsFillTrashFill fontSize={23} color="#FF3D3D" />
      </DeleteButton>

      <DateText>{date}</DateText>
    </NoteContainer>
  );
}

export default Note;
