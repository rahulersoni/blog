import React, { useEffect, useRef, useState } from 'react';
import Thumb from "../../assets/images/thumb.jpg"
import { FaEllipsisH, FaHeart, FaRegHeart, FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PostActions from '../actions/PostActions';


const DashboardPostCard = ({ data: post }) => {

    const [isPostActionEnabled, setPostActionEnabled] = useState(false);
    const [isPostWishlist, setIsPostWishlist] = useState(post.wishlist);

    const userMenuRef = useRef(null);

    const toggleUserMenu = () => {
        setPostActionEnabled(!isPostActionEnabled);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setPostActionEnabled(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setPostActionEnabled(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    const handleWishlist = () => {
        setIsPostWishlist(true);
    }

    return (
        <div className='text-left flex-1 latest-item shadow-sm bg-white rounded-xl relative group dark:bg-slate-800'>

            <Link to={post?.link}>
                <img className='block w-full transition-all duration-200 group-hover:shadow-secondary-shadow rounded-xl shadow-card' src={Thumb} alt={post.title} />
            </Link>
            <div className='post-content latest-content pl-6 pr-6 pt-6 pb-8'>
                <Link to={post?.category_link}>
                    <div className='post-category text-xs latest-category text-primary mt-3 pb-2'>{post.category}</div>
                </Link>
                <Link to={post?.link}>
                    <h4 className='category-name category-title text-lg font-bold mb-2 dark:text-white'>{post.title}</h4>
                </Link>

                <div className='author-meta flex gap-1'>

                    <div onClick={handleWishlist} className='rounded-full w-24 h-8 flex-1 flex gap-2 items-center justify-center hover:bg-light group cursor-pointer dark:bg-slate-800 dark:text-slate-400'>

                        {isPostWishlist ? <FaHeart className='text-sm group-hover:text-primary' /> : <FaRegHeart className='text-sm group-hover:text-primary' />}
                        <div className='text-sm group-hover:text-primary' >53</div>

                    </div>

                    <div className='rounded-full w-24 h-8 flex-1 flex gap-2 items-center justify-center hover:bg-commnets-light group dark:bg-slate-800 dark:text-slate-400'>
                        <FaRegCommentAlt className='text-sm group-hover:text-commnets' />
                        <div className='text-sm group-hover:text-commnets' >53</div>
                    </div>

                    <div className='rounded-full w-24 h-8 flex-1 flex gap-2 items-center justify-center hover:bg-commnets-light group dark:bg-slate-800 dark:text-slate-400'>
                        <Link to={``}><FaShare className='text-sm group-hover:text-commnets' /></Link>
                    </div>

                    <div className='relative cursor-pointer' ref={userMenuRef}>
                        <div onClick={toggleUserMenu} className='rounded-full w-20 h-8 flex-1 flex gap-2 items-center justify-center hover:bg-commnets-light group dark:bg-slate-800 dark:text-slate-400'>
                            <FaEllipsisH className='text-sm group-hover:text-commnets' />
                        </div>
                        {isPostActionEnabled && <PostActions id={post.id} link={post?.link} />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardPostCard