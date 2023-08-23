import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import logo from "../assets/images/logo.png"
import UserNav from '../components/userNav/UserNav'
import SearchTop from '../components/search/SearchTop'


const Header = ({ user }) => {

    const [isDarkMode, setDarkMode] = useState(false);
    const HTML = document.querySelector('HTML');

    const toggleDarkMode = () => {
        if (HTML.classList.contains('dark')) {
            HTML.classList.remove('dark')
        } else {
            HTML.classList.add('dark')
        }
        setDarkMode(!isDarkMode);
    };


    return (
        <>
            <header className='flex items-center gap-4 md:gap-8 flex-col dark:bg-slate-900 bg-slate-100 sm:flex-row md:flex-row py-4 px-3 sm:px-4 h-full' id='top'>
                <div className='flex md:flex-1 lg:flex-none gap-3 md:gap-8 justify-between items-center lg:w-auto w-full'>
                    <div className='logo-container'>
                        <Link to="/">
                            <img className='w-150' src={logo} alt='name' />
                        </Link>
                    </div>
                    <div className='menu menu-container justify-end flex-1 lg:flex-auto flex gap-5 items-center'>
                        <div className='hidden lg:hidden sm:flex-1'>
                            <div className=' sm:block '>
                                <SearchTop />
                            </div>
                        </div>
                        <div className='block md:block lg:hidden'>
                            <UserNav user={user} />
                        </div>
                        <nav className='main-header-menu group'>
                            <ul className='master-menu relative '>
                                <li className='menu-item hidden md:block '>
                                    <Link to="/" className='text-secondary dark:text-slate-400 py-10 cursor-pointer'>
                                        <label>Recipies </label>
                                    </Link>
                                </li>
                                <li>
                                    <div className='flex justify-center items-center w-7 h-7 text-white bg-primary border border-solid border-primary rounded-md p-1 md:hidden'>
                                        <FiMenu />
                                    </div>

                                </li>
                                <ul className='hidden sub-menu overflow-hidden shadow-sub-menu rounded-lg absolute top-8 right-0 lg:left-0 text-left min-w-250 text-secondary z-40 bg-white group-hover:block dark:bg-slate-800'>
                                    <li className='menu-item r'>
                                        <Link to="/" className='cursor-pointer px-4 py-2 block hover:bg-sub-menu dark:hover:bg-slate-500'> <label className='dark:text-slate-200 cursor-pointe'>Home </label></Link>
                                    </li>
                                    <li className='menu-item'>
                                        <Link to="/package" className='px-4 py-2 block hover:bg-sub-menu dark:hover:bg-slate-500'> <label className='dark:text-slate-200'>Package </label></Link>
                                    </li>
                                    <li className='menu-item'>
                                        <Link to="/" className='px-4 py-2 block hover:bg-sub-menu dark:hover:bg-slate-500'> <label className='dark:text-slate-200'>Contact </label></Link>
                                    </li>
                                </ul>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='block flex-1 w-full sm:hidden lg:block'>
                    <SearchTop />
                </div>

                <div className='hidden md:hidden lg:block'>
                    <UserNav user={user} />
                </div>
            </header>

            <div className="fixed left-10 bottom-10 flex z-50 justify-center items-center bg-primary rounded-full w-10 h-10">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <FiMoon className={`h-6 w-6 text-xs text-white`} />
                    ) : (
                        <FiSun className={`h-6 w-6 text-xs text-white`} />
                    )}
                </button>
            </div>
        </>

    );
};

export default Header;
