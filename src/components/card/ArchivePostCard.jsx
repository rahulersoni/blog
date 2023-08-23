import React from 'react'
import Thumb from "../../assets/images/thumb.jpg"
import { Link } from 'react-router-dom';

const ArchivePostCard = (props) => {
    const post = props.data;

    return (
        <div className='text-left flex-1 latest-item hover:bg-white dark:hover:bg-slate-700 shadow-sm rounded-xl relative group'>
            <a href={post?.link}>
                <img className='block w-full transition-all duration-200 group-hover:shadow-secondary-shadow rounded-xl shadow-card' src={Thumb} alt={post.title} />
            </a>
            <div className='post-content latest-content pl-6 pr-6 pt-6 pb-8'>
                <div className='author-meta flex items-center gap-5'>
                    <img className='w-12 h-12 rounded-full shadow-card' src={Thumb} alt={post.title} />
                    <div className=''>
                        <div className='author-name'>
                            <span className='category-post-count text-gray-400'>by </span>
                            <Link className="dark:text-slate-200" to={post?.category_link}>{post.author}</Link>
                        </div>
                    </div>
                </div>
                <a href={post?.category_link}>
                    <div className='post-category text-sm latest-category text-primary mt-3 pb-2'>{post.category}</div>
                </a>
                <a href={post?.link}>
                    <h4 className='category-name category-title text-lg font-bold mb-4 dark:text-white'>{post.title}</h4>
                    <p className='dark:text-slate-400'>We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. ...</p>
                </a>
            </div>
        </div>
    )
}

export default ArchivePostCard