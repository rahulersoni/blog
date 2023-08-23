import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Page from '../templates/Page'
import TextInput from '../components/fields/TextInput'
import { AddLoadingEffect, RemoveLoadingEffect } from '../function/Helper'
import BtnInput from '../components/fields/BtnInput'

const ForgotPassword = () => {

    const [forgetData, setForgetData] = useState({})
    const navigate = useNavigate();

    const onChangeHandler = ({ target: { name, value } }) => {
        setForgetData(prevForgetData => ({
            ...prevForgetData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        AddLoadingEffect(e);
        // Removing and redirecting
        RemoveLoadingEffect(e, navigate, '/login');
    }

    return (
        <Page title="Forget Password">
            <section className='forgot-password pt-14 pb-14 p-3 0' id='forgot-password'>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-16 rounded-lg shadow-card text-center dark:bg-slate-800'>
                        <h2 className='mb-7'>Forgot Password?</h2>
                        <p className='mb-4 '>Lost your password? Please enter your username or email address. <br></br>You will receive a link to create a new password via email.</p>
                        <form className='form mb-5' method='post' onSubmit={handleSubmit}>
                            <div className='input-group text-left mb-5'>
                                <TextInput action={onChangeHandler} name='username' value={forgetData?.username} label="Username/Email Address" curved={true} />
                            </div>
                            <BtnInput text="Reset Password" full="true" />
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

export default ForgotPassword