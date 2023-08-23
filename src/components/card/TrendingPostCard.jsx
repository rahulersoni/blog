import React from 'react'
import Thumb from "../../assets/images/thumb.jpg"
import BtnOutline from '../btn/BtnOutline';

const TrendingPostCard = ({ data: post }) => {

    return (
        <div>
            <div className='text-left mb-8 md:mb-0 flex-1 trending-item shadow-sm bg-white dark:bg-slate-800 rounded-xl relative group p-10 mr-10 group-hover:shadow-card-hover'>
                <a href={post?.link} className='block -mt-20 -mr-20'>
                    <img className='block w-full transition-all duration-200 group-hover:shadow-secondary-shadow rounded-xl shadow-card' src={Thumb} alt={post.title} />
                </a>
                <div className='post-content trending-content pb-8'>
                    <a href={post?.category_link}>
                        <div className='post-category text-sm trending-category text-primary mt-3 pb-2'>{post.category}</div>
                    </a>
                    <a href={post?.link}>
                        <h4 className='category-name category-title text-lg font-bold mb-4 dark:text-white'>{post.title}</h4>
                    </a>
                    <BtnOutline type="primary" link={post?.link} text="Read More" />
                </div>
            </div>
        </div>
    )
}

export default TrendingPostCard