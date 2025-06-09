import React from 'react'
import { NoteProvider } from '../../context/notesContext/NotesContext'
import FormNote from '../../components/note/formNote/formNote'
import AllNotes from '../../components/note/allNote/allnote';
import './notePage.css';
function NotePage() {
    return (
        <NoteProvider>
            <div className='notesPageContainer'>
                <FormNote /> {/* Componente para adicionar uma nova nota */}
                <AllNotes /> {/* Componente para listar todas as notas */}
            </div>
        </NoteProvider>


    );
}


export default NotePage;