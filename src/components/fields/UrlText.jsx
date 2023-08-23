import React, { useState } from 'react'
import { FiEdit, FiSave } from 'react-icons/fi';

const UrlText = ({ label, name, value, placeholder, curved, action }) => {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        setIsEditMode(false);
        // Perform save action or update the state here
    };

    const handleState = (e) => {
        if (action) {
            action(e);
        }
    }

    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">{label}</label>
            <div className="relative">
                <input name={name} disabled={!isEditMode} onChange={handleState} id={name} value={value ? value : ''} type="text" placeholder={placeholder ? placeholder : ''} autoComplete="given-name" className={`border border-solid border-gray-400 shadow-inner outline-none ${curved ? 'rounded-full' : ''} ${isEditMode ? 'bg-slate-white' : 'bg-slate-400'} w-full  text-capitalize py-2 px-6 pr-37 dark:placeholder:text-slate-400 dark:text-slate-200 dark:bg-slate-700 dark:border-none`} />
                {isEditMode ? (
                    <FiSave
                        onClick={handleSaveClick}
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-green-500'
                    />
                ) : (
                    <FiEdit
                        onClick={handleEditClick}
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                    />
                )}
            </div>
        </>
    )
}

export default UrlText