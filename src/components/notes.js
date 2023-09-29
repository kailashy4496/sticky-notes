import React from 'react';
import { FaNotesMedical } from 'react-icons/fa';
import NoteFields from '../pages/notefields';
import '../styles/notes.css'


const notes = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <h1>
                    <FaNotesMedical
                        color='blueviolet'
                    />
                    Sticy Notes
                </h1>
            </div>
            <div className='new-fields'>
                <NoteFields />
            </div>
        </div>
    )
}

export default notes;
