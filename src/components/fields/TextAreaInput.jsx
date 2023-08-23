import React from 'react'

const TextArea = ({ label, name, defaultValue, placeholder, curved, action, row }) => {

    const handleState = (e) => {
        if (action) {
            action(e);
        }
    }
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">{label}</label>

            <div className="mt-2">
                <textarea name={name} onChange={handleState} rows={row ? row : 3} id={name} type="text" placeholder={placeholder ? placeholder : ''} autoComplete="given-name" className={`border border-solid border-gray-400 shadow-inner outline-none ${curved ? 'rounded-2xl' : ''}  w-full bg-white text-capitalize py-4 px-6 pr-37 dark:placeholder:text-slate-400 dark:text-slate-200 dark:bg-slate-700 dark:border-none`} value={defaultValue} ></textarea>
                {/* <textarea name={name} onChange={handleState} rows={row ? row : 3} id={name} type="text" placeholder={placeholder ? placeholder : ''} autoComplete="given-name" className={`border border-solid border-gray-400 shadow-inner outline-none ${curved ? 'rounded-2xl' : ''}  w-full bg-white text-capitalize py-4 px-6 pr-37 dark:placeholder:text-slate-400 dark:text-slate-200 dark:bg-slate-700 dark:border-none`} >{defaultValue}</textarea> */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">Write the post content here.</p>
            </div>
        </>
    )
}

export default TextArea