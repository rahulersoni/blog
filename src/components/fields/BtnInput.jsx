import React from 'react'

const BtnInput = ({ text = 'Submit', full }) => {
    return (
        <input type='submit' name='submit' value={text} className={`cursor-pointer inline-block ${full && 'w-full'} px-6 py-3 rounded-md font-semibold text-white bg-primary shadow-primary-shadow transition-colors hover:bg-secondary hover:shadow-secondary-shadow dark:hover:bg-slate-950`} />
    )
}

export default BtnInput