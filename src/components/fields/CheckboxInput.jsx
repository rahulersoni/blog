import React from 'react'

const CheckboxInput = ({ label, name, value, action, desc }) => {

    const handleState = (e) => {
        if (action) {
            action(e);
        }
    }

    return (
        <>
            <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input id={name} name={name} onChange={handleState} value={Number(value) ? 0 : 1} type="checkbox" className="h-4 w-4 rounded cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600" checked={Number(value) ? true : false} />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor={name} className="font-medium cursor-pointer text-gray-900 dark:text-slate-400">{label}</label>
                        <p className="text-gray-500 dark:text-slate-400">{desc}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CheckboxInput