import React, { useEffect, useState, useRef } from 'react';
import GridLoop from '../components/loops/GridLoop';
import AuthorImg from "../assets/images/Author.jpeg";
import Page from './Page';

const Author = (props) => {
    const latestPostsData = props.data;
    const [endpoint, setEndpoint] = useState('');
    const sidebarRef = useRef(null);

    useEffect(() => {
        // Get the current URL's endpoint (last part)
        const currentPathname = window.location.pathname;

        // Split the pathname by '/'
        const parts = currentPathname.split('/');

        // Get the last part (endpoint)
        const lastPart = parts[parts.length - 1];

        // Update the state with the endpoint
        setEndpoint(lastPart);

        // Function to handle scroll and set sticky behavior
        const handleScroll = () => {
            const sidebar = sidebarRef.current;
            if (sidebar) {
                const offset = 50;
                const topPosition = sidebar.getBoundingClientRect().top;
                if (topPosition <= offset) {
                    sidebar.classList.add('sticky', 'top-5');
                } else {
                    sidebar.classList.remove('sticky', 'top-5');
                }
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <Page title="" classes="author-page" >
            <section className='archeive flex flex-wrap pt-14 gap-9 pb-14 pl-4 pr-4 bg-zinc-100 dark:bg-slate-700' id='archeive'>
                <div className='archive md:w-8/12'>

                    <div className='author-stats flex gap-5 mb-10 justify-between items-center'>
                        <div className='total-post font-bold text-xl dark:text-slate-200'>Total 20</div>
                        <div className='sort font-bold'>
                            <select className="block w-full min-w-250 rounded-md border-0 p-2 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-slate-200">
                                <option>Sory By</option>
                                <option value="Sort by new">Sort by new</option>
                                <option value="Sort by desc">Sort by asc</option>
                                <option value="Sort by desc" selected>Sort by desc</option>
                                <option value="Sort by popularity" selected>Sort by popularity</option>
                            </select>
                        </div>
                    </div>

                    <GridLoop data={latestPostsData} template="latest" column="2" limit="8" />
                </div>

                <div className='sidebar-athor flex-1 relative' >
                    <div className='bg-slate-500 w-full p-10 rounded-lg text-center dark:bg-slate-800' ref={sidebarRef}>
                        <div className='text-center'><img className='m-auto w-16 h-16 rounded-full mb-4' src={AuthorImg} alt='' /> </div>
                        <h2 className='author-name mb-4 capitalize'>{endpoint}</h2>
                        <p className='text-white dark:text-slate-400'>We offer a complete array of competent professionals that cover all main medical specialties. The locations cover the East and West Coast, with hospitals in Miami, New York, Los Angeles, and more.</p>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Author;
