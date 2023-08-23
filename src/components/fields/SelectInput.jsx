import React from 'react'

const SelectInput = ({ label, name, value, placeholder, curved, action, options }) => {

    const handleState = (e) => {
        if (action) {
            action(e);
        }
    }

    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">{label}</label>
            <div className="mt-2">
                <select name={name} onChange={handleState} id={name} value={value ? value : ''} type="text" placeholder={placeholder ? placeholder : ''} autoComplete="given-name" className={`border border-solid border-gray-400 shadow-inner outline-none ${curved ? 'rounded-full' : ''}  w-full bg-white text-capitalize py-2 px-6 pr-37 dark:placeholder:text-slate-400 dark:text-slate-200 dark:bg-slate-700 dark:border-none`} >
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default SelectInput