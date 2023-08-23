import React from 'react'
import AuthorImg from "../../assets/images/Author.jpeg"
import Thumb from "../../assets/images/thumb.jpg"
import { Link } from 'react-router-dom';

const LatestPostCard = ({ data: post }) => {

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
                <div className='author-meta flex gap-5'>
                    <img className='w-12 h-12 rounded-full shadow-card' src={AuthorImg} alt={post.title} />
                    <div className=''>
                        <div className='author-name text-xs'>
                            <span className='category-post-count  text-gray-400'>by </span>
                            <Link className='dark:text-slate-200' to={post?.author_link}>{post.author}</Link>
                        </div>
                        <div className='author-name category-post-count text-xs text-gray-400'>{post.post_date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPostCard