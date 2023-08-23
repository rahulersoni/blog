import React, { useEffect, useRef, useState } from 'react'
import Btn from '../btn/Btn';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit, FiHelpCircle, FiLogOut, FiPlus, FiUser, FiPackage } from 'react-icons/fi';
import Thumb from "../../assets/images/thumb.jpg"

const UserNav = ({ user }) => {

    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    const userMenuRef = useRef(null);

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        navigate('/login');
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserMenuOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    return (
        <div className='flex items-center gap-3 cta-container'>
            {!user ? <>
                <div className='gap-4 items-center flex'>
                    <Btn type="primary" link="/register" text="Join For Free" size="lg" />
                    <Link to="/login" className="inline-block px-6 py-3 rounded-md font-semibold text-primary bg-white shadow-card-shadow transition-colors hover:text-white hover:bg-secondary hover:shadow-secondary-shadow">Login</Link>
                </div>
            </> : <>
                <div className='mobile-user relative' ref={userMenuRef}>
                    <Link onClick={toggleUserMenu} className='user-circle-icon mobile w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:shadow-primary-shadow transform hover:mt-2 hover:scale-110 transition-all duration-200' to="#">
                        <FiUser className='icons text-white' />
                    </Link>

                    {isUserMenuOpen && (
                        <div className='sub-menu user-menu flex flex-col bg-white dark:bg-slate-800 rounded-lg absolute right-0 top-10 w-56 overflow-hidden shadow-card z-50'>
                            <div className='px-4 py-3 flex gap-3 items-center overflow-hidden'>
                                <img src={Thumb} alt='' className='w-10 h-10 rounded-full' />
                                <div className='info'>
                                    <div className='name break-words dark:text-slate-200'>Hello</div>
                                    <div className='role dark:text-slate-200'>Developer</div>
                                </div>
                            </div>
                            <hr />

                            <Link to="/dashboard" className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500 '>
                                <FiUser className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200'>Author Page</span>
                            </Link>

                            <Link to="/dashboard/orders" className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500 '>
                                <FiPackage className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200'>Orders</span>
                            </Link>

                            <Link to={`/dashboard/add-post`} className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500'>
                                <FiPlus className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200'>Submit Post</span>
                            </Link>

                            <Link to={`/dashboard/edit-profile`} className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500'>
                                <FiEdit className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200'>Edit Profile</span>
                            </Link>
                            <hr />
                            <Link to={`/dashboard/help`} className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500'>
                                <FiHelpCircle className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200 '>Help</span>
                            </Link>
                            <Link to={'/logout'} onClick={logoutHandler} className='px-4 py-3 flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-slate-500'>
                                <FiLogOut className='dark:text-slate-200' /> <span className='menu-label dark:text-slate-200'>Logout</span>
                            </Link>
                        </div>
                    )}
                </div>
            </>}
        </div>
    )
}

export default UserNav