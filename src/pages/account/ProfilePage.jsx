import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiCoffee, FiGlobe } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import GridLoop from "../../components/loops/GridLoop"
import thumb from "../../assets/images/thumb.jpg"
import Page from '../../templates/Page'

const ProfilePage = ({ data: latestPostsData, filter }) => {

    return (
        <Page title="User Profile" classes="bg-zinc-100 dark:bg-slate-700">
            <section className='flex justify-between pt-14 pb-14 pl-5 pr-5 bg-zinc-100 dark:bg-slate-700'>
                <div className='user-account flex justify-start gap-5'>
                    <img className='w-28 h-28 rounded-lg ' alt={latestPostsData.title} src={thumb} />
                    <div className='author-info text-left'>
                        <h3 className='text-2xl font-bold mb-1 dark:text-white'>Kickas</h3>
                        <div className='mb-1 dark:text-slate-400'>Biographical Info, this will show up in the author page.</div>
                        <Link href='#' className='mb-3 flex items-center gap-3 dark:text-slate-400'>
                            <FiGlobe /> https://smarttechmukesh.com
                        </Link>
                        <div className='social social-icons flex gap-2 flex-1 justify-start'>
                            <Link className='w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:scale-110 transition-all duration-200' to="#">
                                <FiYoutube className='icons text-white' />
                            </Link>
                            <Link className='w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:scale-110 transition-all duration-200' to="#">
                                <FiFacebook className='icons text-white' />
                            </Link>
                            <Link className='w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:scale-110 transition-all duration-200' to="#">
                                <FiTwitter className='icons text-white' />
                            </Link>
                            <Link className='w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:scale-110 transition-all duration-200' to="#">
                                <FiInstagram className='icons text-white' />
                            </Link>
                            <Link className='w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:scale-110 transition-all duration-200' to="#">
                                <FiLinkedin className='icons text-white' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='cta-container hidden md:block'>

                    <Link to="/dashboard/edit-profile" className="block text-center mb-4 px-6 py-3 rounded-md font-semibold text-primary bg-white shadow-card-shadow transition-colors hover:text-white hover:bg-secondary hover:shadow-secondary-shadow">Edit Profile</Link>

                    <Link to="/edit" className="flex items-center gap-2 text-center mb-4 px-6 py-3 rounded-md font-semibold bg-primary text-white shadow-card-shadow transition-colors hover:text-white hover:bg-secondary hover:shadow-secondary-shadow"><FiCoffee /> Buy Coffie</Link>

                </div>
            </section>

            <section className='filter pt-14 pb-14 pl-5 pr-5'>
                <div className='flex justify-between items-center flex-col lg:flex-row'>
                    <div className='tab flex gap-3 flex-wrap mb-5 justify-center md:justify-start'>

                        <Link to={`/dashboard/?filter_type=published`} className={`${!filter || (filter === 'published') ? 'bg-primary text-white' : 'bg-slate-300 text-slate-900'} py-2 px-5 rounded-full cursor-pointer hover:shadow-primary-shadow hover:bg-primary hover:text-white`}>Published</Link>

                        <Link to={`/dashboard/?filter_type=wishlist`} className={`${filter === 'wishlist' ? 'bg-primary text-white' : 'bg-slate-300 text-slate-900'} py-2 px-5 rounded-full cursor-pointer hover:shadow-primary-shadow hover:bg-primary hover:text-white`}>Liked Articles</Link>

                        <Link to={`/dashboard/?filter_type=draft`} className={`${filter === 'draft' ? 'bg-primary text-white' : 'bg-slate-300 text-slate-900'} py-2 px-5 rounded-full cursor-pointer hover:shadow-primary-shadow hover:bg-primary hover:text-white`}>Drafts</Link>

                        <Link to={`/dashboard/?filter_type=pending`} className={`${filter === 'pending' ? 'bg-primary text-white' : 'bg-slate-300 text-slate-900'} py-2 px-5 rounded-full cursor-pointer hover:shadow-primary-shadow hover:bg-primary hover:text-white`}>Pending</Link>

                    </div>

                    <div className='dropdown'>
                        <select className="block w-full min-w-250 rounded-md border-0 p-2 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-slate-200">
                            <option value="Most Recent" defaultValue>Most Recent</option>
                            <option value="Most Liked">Most Liked</option>
                            <option value="Most Discussed">Most Discussed</option>
                            <option value="Most Viewed">Most Viewed</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className='filter pb-14 pl-5 pr-5'>
                <GridLoop data={latestPostsData} template="dashboard" column="4" limit="10" filter={filter} />
            </section>
        </Page>
    )
}

export default ProfilePage