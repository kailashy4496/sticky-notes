import React, { useState } from 'react';
import { MdBorderColor } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

import '../styles/notefields.css'


const NoteFields = () => {
    const [showInputs, setShowInputs] = useState(0);
    const [inputValues, setInputValues] = useState([]);



    const handleButton = () => {
        setShowInputs(showInputs + 1);

        setInputValues([...inputValues, `Notes ${showInputs + 1}`]);
    }

    const handleDelete = (index) => {
        const updatedInputFields = inputValues.filter((_, i) => i !== index);
        setInputValues(updatedInputFields);
    };

    return (
        <>
            <div className='btn-fields'>
                <button onClick={handleButton}>
                    <MdBorderColor /> Create Notes
                </button>
            </div>
            {inputValues.map((input, index) => (
                <div className='input-fields'>
                    <input
                        key={index}
                        placeholder={input}
                    />
                    <span>
                        <MdDeleteForever
                            className='delete'
                            onClick={() => handleDelete(index)}
                            size={'35px'}
                            color='black'
                        />
                    </span>
                </div>
            ))}
        </>
    )
}

export default NoteFields;
