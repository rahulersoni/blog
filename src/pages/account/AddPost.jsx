import React, { useState } from 'react'
import thumb from "../../assets/images/thumb.jpg"
import { FiLoader } from 'react-icons/fi';
import TextInput from '../../components/fields/TextInput';
import UrlText from '../../components/fields/UrlText';
import SelectInput from '../../components/fields/SelectInput';
import TextAreaInput from '../../components/fields/TextAreaInput';
import CheckboxInput from '../../components/fields/CheckboxInput';
import RadioBtnInput from '../../components/fields/RadioBtnInput';
import Placeholder from "../../assets/svgs/Placeholder"
import Page from '../../templates/Page'
import { AddLoadingEffect, RemoveLoadingEffect } from '../../function/Helper';

const AddPost = () => {

    const [post, setPost] = useState({});

    const handleOnChange = ({ target: { name, value } }) => {

        setPost(prevPost => ({
            ...prevPost, [name]: value
        }))
    }

    const postSubmitHandler = (e) => {

        e.preventDefault();
        // Add loading Effect
        AddLoadingEffect(e);

        // Handle your logic here

        // Remove Loding effect
        RemoveLoadingEffect(e);

    }

    const draftSubmitHandler = (e) => {

        e.preventDefault();

        // Add loading Effect
        AddLoadingEffect(e);

        // Handle your logic here

        // Remove Loding effect
        RemoveLoadingEffect(e);

    }

    return (
        <Page className="Edit Posts" classes="bg-zinc-100 dark:bg-slate-700">
            <section className='edit-post pt-14 pb-14 pl-5 pr-5 ' id='edit-post'>
                <div className='max-w-screen-lg m-auto'>
                    <form className='p-10 rounded-lg bg-white dark:bg-slate-800'>
                        <div className="space-y-12">

                            <div className="border-b border-gray-900/10 dark:border-slate-300 pb-12">
                                <h2>Add Post</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-200">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div className="col-span-full">
                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">Cover photo</label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-slate-300">
                                            <div className="flex items-center flex-col">
                                                <div>
                                                    {thumb ? <>
                                                        <img src={thumb} className="md:max-w-xl" alt='' />
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

                                    <div className="col-span-full">
                                        <TextInput label="Post Title" name="title" value={post?.title} curved={true} action={handleOnChange} />
                                    </div>

                                    <div className='col-span-full '>
                                        <UrlText label="Link" name="link" value={post.link} curved={true} action={handleOnChange} />
                                    </div>


                                    <div className="sm:col-span-3">

                                        <SelectInput label="Category" name="category" curved={true} value={post?.category} options={['BBQ', 'GRILLING', 'BBQ & GRILLING']} action={handleOnChange} />

                                    </div>

                                    <div className="sm:col-span-3">
                                        <SelectInput label="Tags" name="tags" curved={true} value={post?.category} options={['BBQ', 'GRILLING', 'BBQ & GRILLING']} action={handleOnChange} />

                                    </div>

                                    <div className="col-span-full">

                                        <TextAreaInput label="Post Content" row={5} name="post_content" curved={true} defaultValue={post?.post_content} action={handleOnChange} />

                                    </div>

                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 dark:border-slate-300 pb-12">

                                <div className="mt-10 space-y-10">

                                    <fieldset>
                                        <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">By Email</legend>
                                        <CheckboxInput label="Allow comments" desc="Enable the comments by the users?" name='comment' value={post?.comment} action={handleOnChange} />
                                    </fieldset>

                                    <fieldset>
                                        <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Push Notifications</legend>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">These are delivered via SMS to your mobile phone.</p>
                                        <div className="mt-6 space-y-6">

                                            <RadioBtnInput label="Everyone" id="everyone" name="push_notification" value={post?.push_notification} action={handleOnChange} />

                                            <RadioBtnInput label="Same as email" id="email" name="push_notification" value={post?.push_notification} action={handleOnChange} />

                                            <RadioBtnInput label="No push notification" id="no_push" name="push_notification" value={post?.push_notification} action={handleOnChange} />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-x-6">

                            <button onClick={postSubmitHandler} type="submit" className="flex items-center px-6 py-3 rounded-md font-semibold text-white bg-primary shadow-primary shadow-primary-shadow transition-colors hover:bg-secondary hover:shadow-secondary-shadow ml-2"> Publish <FiLoader className="hidden animate-spin ml-2" /></button>


                            <button onClick={draftSubmitHandler} className="inline-block px-6 py-3 rounded-md font-semibold text-primary bg-white shadow-card-shadow transition-colors hover:text-white hover:bg-secondary hover:shadow-secondary-shadow">
                                Draft <FiLoader className="hidden animate-spin ml-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Page>
    )
}

export default AddPost