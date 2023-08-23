import React from 'react'

const RadioBtnInput = ({ label, name, id, value, action }) => {

    const handleState = (e) => {
        if (action) {
            action(e);
        }
    }

    return (

        <div className="flex items-center gap-x-3">
            <input id={id} name={name} onChange={handleState} type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value={id} checked={Number(value) === Number(id) ? true : false} />
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">{label}</label>
        </div>
    )
}

export default RadioBtnInput