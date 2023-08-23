import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Page from '../templates/Page'
import TextInput from '../components/fields/TextInput'
import { AddLoadingEffect, RemoveLoadingEffect } from '../function/Helper'
import BtnInput from '../components/fields/BtnInput'

const Login = () => {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: 'demo',
        password: 'demo',
    })

    const onChangeHandler = ({ target: { name, value } }) => {
        setLoginData(prevLoginData => ({
            ...prevLoginData, [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // Adding the loading
        AddLoadingEffect(e);
        // API login here

        localStorage.setItem('user', 'test');

        // Removing and redirecting
        RemoveLoadingEffect(e, navigate, '/dashboard');
    }


    return (
        <Page title="Login">
            <section className='login pt-14 pb-14 p-3' id='login'>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-16 rounded-lg shadow-card dark:bg-slate-800'>
                        <h2 className='mb-7'>Sign in to your account</h2>
                        <form className='form mb-5 text-center relative ' onSubmit={submitHandler}>
                            <div className='input-group text-left mb-3'>
                                <TextInput action={onChangeHandler} name='username' value={loginData?.username} label="Username/Email Address" curved={true} />
                            </div>

                            <div className='input-group'>
                                <div className='flex gap-5 items-center justify-between'>
                                    <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-400">Password</label>
                                    <Link to={`/forgot-password`} className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-400">Forgot Password</Link>
                                </div>
                                <input onChange={onChangeHandler} id="password" className='border border-solid border-gray-400 shadow-inner outline-none rounded-full w-full bg-white text-capitalize py-2 px-6 pr-37 mb-4 dark:text-slate-200 dark:bg-slate-700 dark:border-none' type='password' placeholder='Name' name='password' value={loginData?.password} />
                            </div>

                            <BtnInput text="Login" full="true" />

                        </form>
                        <div className='flex justify-center'>
                            <div className='dark:text-slate-400'>Not a member? <Link className='text-primary font-bold' to="/register">Register Now</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Login