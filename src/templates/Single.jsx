import React from 'react'
import GridLoop from '../components/loops/GridLoop'
import Thumb from '../assets/images/thumb.jpg'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa'
import Btn from '../components/btn/Btn'
import Sidebar from './Sidebar'
import Page from './Page'

const Single = (props) => {

    const latestPostsData = props.data;

    return (
        <Page title={latestPostsData[0].title} classes="single-posts">

            <section className='archeive flex single-post flex-wrap pt-14 gap-9 pb-14 pl-4 pr-4 bg-zinc-100 dark:bg-slate-700' id='single-blod-post'>
                <div className='archive md:w-8/12'>

                    <div className={`outer-container text-left latest-container grid grid-cols-1 gap-5 relative mb-8`}>
                        <img className='rounded-2xl' src={Thumb} alt='' />
                        <div className='single-content'>
                            <h3 className='text-3xl font-bold mb-4 dark:text-white'>Explore the Wonders of North Indian Cuisine</h3>
                            <p className='mb-10 dark:text-slate-300'>Nunc sagittis nibh et felis dignissim, ac sagittis ante venenatis. Vivamus lobortis, urna sed scelerisque gravida, nulla libero tincidunt urna, eget rhoncus lectus quam id lectus. Quisque tristique non neque vitae pretium. Duis eget mi libero. Vestibulum eu convallis leo. Duis eget bibendum eros, at suscipit nibh. Etiam leo sem, fringilla quis dictum accumsan, luctus vel elit. Mauris magna nibh, scelerisque a ipsum ut, scelerisque vestibulum mauris.</p>
                            <img className='rounded-2xl' src={Thumb} alt='' />
                            <p className='mb-10 mt-10 dark:text-slate-300'>Nunc sagittis nibh et felis dignissim, ac sagittis ante venenatis. Vivamus lobortis, urna sed scelerisque gravida, nulla libero tincidunt urna, eget rhoncus lectus quam id lectus. Quisque tristique non neque vitae pretium. Duis eget mi libero. Vestibulum eu convallis leo. Duis eget bibendum eros, at suscipit nibh. Etiam leo sem, fringilla quis dictum accumsan, luctus vel elit. Mauris magna nibh, scelerisque a ipsum ut, scelerisque vestibulum mauris.</p>

                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className='meta flex flex-col md:flex-row justify-between'>
                                <div className='tags flex gap-4 items-center'>
                                    <span className='dark:text-slate-300'>tags :</span>
                                    <Link to='#' className='Mobile tags-pile py-2 px-5 border border-slate-400 rounded-lg text-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary-shadow dark:text-slate-300'>Mobile</Link>
                                    <Link to='#' className='Mobile tags-pile py-2 px-5 border border-slate-400 rounded-lg text-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary-shadow dark:text-slate-300'>Mobile</Link>
                                </div>
                                <div className='share flex gap-5'>
                                    <FaHeart className='text-primary text-2xl' />
                                    <FaRegHeart className='text-primary text-2xl' />
                                    <FaShareAlt className='text-primary text-2xl ' />
                                    <div className=''></div>
                                </div>
                            </div>
                        </div>

                        <br />

                    </div>

                    <div className='comments-container text-left' id="comment">
                        <h3 className='total-commetns text-3xl font-bold dark:text-white'>3 Responses</h3>
                        <div className='comments loop'>
                            <div className='single-comments rounded-xl mt-5'>

                                <div className='normal-comment p-10 rounded-xl bg-white dark:bg-slate-800'>
                                    <div className='comments-meta mb-5'>
                                        <div className='flex items-center gap-5'>
                                            <img src='#' alt='' />
                                            <div className=''>
                                                <h4 className='comments-author-name text-lg font-bold dark:text-white '>Anonymous</h4>
                                                <div className='comment-ifno dark:text-slate-400'> <span className='date'>January 1, 2023</span>  at <span className='time'>10:48 am</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comment-content mb-5'>
                                        <p className='dark:text-slate-400'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
                                    </div>
                                    <div className='comment-bottom flex items-center gap-5 justify-between'>
                                        <div>
                                            <FaRegHeart className='text-primary text-2xl' />
                                            <div className='comment-like-count'></div>
                                        </div>
                                        <div className='reply cursor-pointer dark:text-slate-400' data-id="comment-id" id="reply">Reply</div>
                                    </div>
                                </div>

                                <div className='reply-comment mt-5 ml-16 p-10 rounded-xl bg-slate-200 dark:bg-slate-800'>
                                    <div className='comments-meta mb-5'>
                                        <div className='flex items-center gap-5'>
                                            <img src='#' alt='' />
                                            <div className=''>
                                                <h4 className='comments-author-name text-lg font-bold dark:text-white'>Anonymous</h4>
                                                <div className='comment-ifno dark:text-slate-400'> <span className='date'>January 1, 2023</span>  at <span className='time'>10:48 am</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comment-content mb-5'>
                                        <p className='dark:text-slate-400'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
                                    </div>
                                    <div className='comment-bottom flex items-center gap-5 justify-between'>
                                        <div>
                                            <FaRegHeart className='text-primary text-2xl' />
                                            <div className='comment-like-count'></div>
                                        </div>
                                        <div className='reply cursor-pointer dark:text-slate-400' data-id="comment-id" id="reply">Reply</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='add-comments mt-5 p-10 rounded-xl bg-slate-200 dark:bg-slate-800'>
                            <h3 className='text-2xl font-bold mb-3 dark:text-white'>Add A Comment</h3>
                            <p className='mb-5 dark:text-slate-400'>Your email address will not be published. Required fields are marked *</p>
                            <form className='form'>
                                <div className='flex gap-5 flex-col md:flex-row'>
                                    <input className='border border-solid border-gray-400 shadow-inner outline-none rounded-full w-full bg-white text-capitalize py-2 px-6 pr-37 mb-4 dark:bg-slate-700 dark:border-0 dark:text-slate-200' type='text' placeholder='Name' name='name' />
                                    <input className='border border-solid border-gray-400 shadow-inner outline-none rounded-full w-full bg-white text-capitalize py-2 px-6 pr-37 mb-4 dark:bg-slate-700 dark:border-0 dark:text-slate-200' type='email' placeholder='Email' name='email' />
                                </div>
                                <textarea rows="7" className='border border-solid border-gray-400 shadow-inner outline-none rounded-xl w-full bg-white text-capitalize py-2 px-6 pr-37 mb-4 dark:bg-slate-700 dark:border-0 dark:text-slate-200' placeholder='Comment' name='comment-text' />
                                <div className='remember-me mb-4 flex gap-3 items-center'>
                                    <input id="comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" className='cursor-pointer' />
                                    <label className='checkbox-text cursor-pointer dark:text-slate-400' htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>
                                <Btn type="primary" text="Submit" />
                            </form>
                        </div>
                    </div>

                </div>

                <Sidebar data={latestPostsData} />

            </section>

            <section className='related pt-14 pb-14 pl-5 pr-5' id='related'>
                <div className='flex items-center pt-6 pb-6 justify-between'>
                    <div className='section-title text-left'>
                        <h3 className='text-3xl font-bold dark:text-white'>Related Posts</h3>
                    </div>
                </div>

                <GridLoop data={latestPostsData} template="latest" column="4" limit="4" />

            </section>
        </Page>
    )
}

export default Single