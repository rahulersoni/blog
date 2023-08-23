import React, { useState } from 'react'
import thumb from "../../assets/images/thumb.jpg"
import Page from '../../templates/Page';
import { FiLoader } from 'react-icons/fi';
import TextInput from '../../components/fields/TextInput';
import SelectInput from '../../components/fields/SelectInput';
import TextAreaInput from '../../components/fields/TextAreaInput';
import Placeholder from "../../assets/svgs/Placeholder"
import { AddLoadingEffect, RemoveLoadingEffect } from '../../function/Helper';

const EditProfile = (props) => {

    const { data } = props;
    const [profile, setProfile] = useState({ ...data })

    const onChandeHandler = ({ target: { name, value } }) => {

        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    }

    const postSubmitHandler = (e) => {

        e.preventDefault();

        // Add loading Effect
        AddLoadingEffect(e);

        // Handle your logic here

        // Remove Loding effect
        RemoveLoadingEffect(e);
    }

    return (
        <Page title="Add Posts" classes="bg-zinc-100 dark:bg-slate-700">
            <section className='edit-post pt-14 pb-14 pl-5 pr-5' id='edit-post'>
                <div className='max-w-screen-lg m-auto'>
                    <form className='bg-white dark:bg-slate-800 p-10 rounded-lg'>
                        <div className="space-y-12">

                            <div className="border-b border-gray-900/10 pb-12">
                                <h2>Edit Profile</h2>

                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">

                                        <TextInput label="First Name" name="first_name" value={profile?.first_name} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="sm:col-span-3">

                                        <TextInput label="Last name" name="last_name" value={profile?.last_name} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="sm:col-span-3">

                                        <TextInput label="Email Address" name="email" value={profile?.email} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="sm:col-span-3">

                                        <SelectInput label="Country" name="country" curved={true} value={profile?.country} options={['BBQ', 'GRILLING', 'BBQ & GRILLING']} action={onChandeHandler} />

                                    </div>

                                    <div className="col-span-full">

                                        <TextInput label="Address" name="address" value={profile?.address} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">

                                        <TextInput label="City" name="city" value={profile?.city} curved={true} action={onChandeHandler} />

                                    </div>


                                    <div className="sm:col-span-2">

                                        <TextInput label="State" name="state" value={profile?.state} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="sm:col-span-2">

                                        <TextInput label="ZIP / Postal code" name="zipcode" value={profile?.zipcode} curved={true} action={onChandeHandler} />

                                    </div>

                                    <div className="col-span-full">

                                        <TextAreaInput label="Bio" row={5} name="bio" curved={true} value={profile?.bio} action={onChandeHandler} />

                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">Profile Picture</label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-slate-300">
                                            <div className="flex items-center flex-col">
                                                <div>
                                                    {thumb ? <>
                                                        <img src={thumb} className="max-w-xl" alt='' />
                                                    </> : <>
                                                        <Placeholder />
                                                    </>}
                                                </div>

                                                <div className="mt-4 flex items-center gap-1 mb-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md px-2 py-1 bg-white font-semibold  focus-within:outline-none focus-within:ring-2 dark:bg-slate-900">
                                                        <span className=''>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600 dark:text-slate-400">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="mt-6 flex items-center gap-x-6">

                            <button onClick={postSubmitHandler} type="submit" className="flex items-center px-6 py-3 rounded-md font-semibold text-white bg-primary shadow-primary shadow-primary-shadow transition-colors hover:bg-secondary hover:shadow-secondary-shadow ml-2"> Update <FiLoader className="hidden animate-spin ml-2" /></button>

                        </div>
                    </form>
                </div>
            </section>
        </Page>
    )
}

export default EditProfile