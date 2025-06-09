import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { NoteContext } from "../../../context/notesContext/NotesContext";
import { styled } from '@mui/material/styles';

const NoteContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#0A0A0A',
  border: '1px solid #00BFFF',
  borderRadius: '8px',
  padding: '20px',
  position: 'relative',
  color: '#FFFFFF',
  boxShadow: '0 4px 6px rgba(0, 191, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 191, 255, 0.3)'
  }
}));

const Title = styled('div')({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#00BFFF'
});

const Description = styled('div')({
  marginBottom: '15px',
  lineHeight: '1.4'
});

const DateText = styled('div')({
  fontSize: '0.8rem',
  color: '#888',
  textAlign: 'right'
});

const ActionButton = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  padding: '5px',
  borderRadius: '4px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 191, 255, 0.1)'
  }
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
      
      <ActionButton 
        style={{ top: '15px', right: '45px' }} 
        onClick={SubmitToEdit}
        title="Edit note"
      >
        <BiSolidEdit fontSize={23} color="#00BFFF" />
      </ActionButton>
      
      <ActionButton 
        style={{ top: '15px', right: '15px' }} 
        onClick={() => deleteNote(id)}
        title="Delete note"
      >
        <BsFillTrashFill fontSize={23} color="#FF3D3D" />
      </ActionButton>
      
      <DateText>{date}</DateText>
    </NoteContainer>
  );
}

export default Note;