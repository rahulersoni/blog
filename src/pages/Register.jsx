import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import Page from '../templates/Page'
import TextInput from '../components/fields/TextInput'
import CheckboxInput from '../components/fields/CheckboxInput'
import { AddLoadingEffect, RemoveLoadingEffect } from '../function/Helper'
import BtnInput from '../components/fields/BtnInput'

const Register = () => {

    const [registerData, setRegisterData] = useState({})
    const navigate = useNavigate();

    const onChangeHandler = ({ target: { name, value } }) => {
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        AddLoadingEffect(e);
        // Removing and redirecting
        RemoveLoadingEffect(e, navigate, '/login');
    }

    return (
        <Page title="Registration">
            <section className='register pt-14 pb-14 p-3 ' id='register'>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-16 rounded-lg shadow-card dark:bg-slate-800'>
                        <h2 className='mb-7'>Create a new account</h2>
                        <form className='form mb-5 text-center' method='post' onSubmit={handleSubmit}>
                            <div className='input-group text-left mb-3'>
                                <TextInput action={onChangeHandler} name='username' value={registerData?.username} label="Username/Email Address" curved={true} />
                            </div>

                            <div className='input-group text-left'>
                                <TextInput action={onChangeHandler} name='password' value={registerData?.password} label="Password" curved={true} textType='password' />
                            </div>
                            <div className='remember-me mb-4 flex gap-5 items-center'>
                                <CheckboxInput label="Remember Me" value={registerData.remember_me} name="remember_me" action={onChangeHandler} />
                            </div>

                            <BtnInput text="Register" full="true" />

                        </form>

                        <div className='flex justify-center'>
                            <div className='dark:text-slate-400'>Already have an account? <Link className='text-primary font-bold' to="/login">Login Now</Link></div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <hr className="h-px my-8 w-full bg-gray-400 border-0" />
                            <div className='flex-1 p-3 min-w-150 dark:text-slate-400'>Or continue with</div>
                            <hr className="h-px my-8 w-full bg-gray-400 border-0" />
                        </div>

                        <div className='flex justify-center gap-5'>
                            <button className="flex items-center justify-center px-10 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <FiTwitter className='icons text-white w-7 pr-3' />
                                Twitter
                            </button>
                            <button className="flex items-center justify-center px-10 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-slate-950">
                                <FiGithub className='icons text-white w-7 pr-3' />
                                GitHub
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Register