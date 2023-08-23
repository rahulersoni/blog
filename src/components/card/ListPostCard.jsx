import React from 'react'
import Thumb from "../../assets/images/thumb.jpg"
import { Link } from 'react-router-dom';

const ListPostCard = (props) => {

    const post = props.data;

    return (
        <div className='text-left mb-8 md:mb-0 flex-1 flex gap-5 md:flex-col lg:flex-row trending-item shadow-sm rounded-xl relative group group-hover:shadow-card-hover'>
            <Link href={post?.link} >
                <img className='block w-full h-36 object-cover object-center transition-all duration-200 group-hover:shadow-secondary-shadow rounded-xl shadow-card' src={Thumb} alt={post.title} />
            </Link>
            <div className='post-content trending-content pb-8'>
                <Link href={post?.category_link}>
                    <div className='post-category text-sm trending-category text-primary mt-3 pb-1'>{post.category}</div>
                </Link>
                <Link href={post?.link}>
                    <h4 className='category-name category-title text-lg font-bold mb-2 dark:text-white'>{post.title}</h4>
                </Link>
                <div className=''>
                    <div className='author-name'>
                        <span className='category-post-count text-gray-400'>by </span>
                        <Link className='dark:text-slate-200' to={post?.author_link}>{post.author}</Link>
                    </div>
                    <div className='author-name category-post-count text-gray-400'>{post.post_date}</div>
                </div>
            </div>
        </div>
    )
}

export default ListPostCard