import React from 'react';
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronUp } from 'react-icons/fi';
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    const onclickHanlder = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // You can use 'auto' instead for instant scrolling
        });
    }
    return (
        <footer className='footer bg-secondary p-10' id='footer'>
            <div className='footer-top flex flex-col md:flex-row gap-8 items-center justify-center mb-4'>
                <nav className='footer-menu flex-1 justify-center'>
                    <ul className='master-menu items-center flex gap-5 relative'>
                        <li className='menu-item group'>
                            <Link to="/" className='text-white'> <label>Recipies </label></Link>
                        </li>
                        <li className='menu-item group'>
                            <Link to="/" className='text-white'> <label>Privacy </label></Link>
                        </li>
                        <li className='menu-item group'>
                            <Link to="/" className='text-white'> <label>Term & Condition </label></Link>
                        </li>
                    </ul>
                </nav>
                <div className='footer-logo flex-1 justify-center'>
                    <img className='m-auto' src={logo} alt='logo' />
                </div>
                <div className='social social-icons flex gap-5 flex-1 justify-center'>
                    {/* Add the icons here */}
                    <FiYoutube className='icons text-white hover:grow' />
                    <FiFacebook className='icons text-white' />
                    <FiTwitter className='icons text-white' />
                    <FiInstagram className='icons text-white' />
                    <FiLinkedin className='icons text-white' />
                </div>
            </div>
            {/* Back to Top icon */}
            <Link to="/#top" onClick={onclickHanlder} className='back-to-top flex justify-center items-center absolute right-3 bg-white rounded-full w-8 h-8 border border-solid border-primary hover:bg-primary group'>
                <FiChevronUp className='text-primary group-hover:text-white' />
            </Link>

            <div className='footer-bottom'>
                <div className='text-white'>© 2023 Rahul React Theme. All Rights Reserved.</div>
            </div>
        </footer>
    )
}

export default Footer;
