import React from 'react'
import Btn from '../btn/Btn'

const NewsLetter = () => {
    return (
        <div className='bg-white text-center p-8 rounded-2xl mb-7 dark:bg-slate-800'>
            <h4 className='text-2xl font-bold mb-4 dark:text-white'>Join The Newsletter</h4>
            <p className='mb-4 dark:text-slate-400'>You will receive the latest news & updates on your favorite</p>
            <form className='form'>
                <input type='email' placeholder='Email Address' name='email' className='border border-solid border-gray-400 shadow-inner outline-none rounded-full w-full bg-white text-capitalize py-2 px-6 pr-37 mb-4 dark:bg-slate-700 dark:border-0 dark:text-slate-200' />
                <Btn type="primary" text="Submit" />
            </form>
        </div>
    )
}

export default NewsLetter