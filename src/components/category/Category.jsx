import React from 'react'
import catFood from "../../assets/images/cat-transparent.png"
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () => {
    const divStyle = {
        background: `url('${catFood}') center center / cover no-repeat`, // Background image properties
    };

    const categories = ['Food', 'Beverages', 'Desserts', 'Snacks', 'Salads'];

    return (
        <div className='category-container flex flex-wrap items-center gap-5'>
            {categories.map((category, index) => (
                <div key={index} className='flex flex-1 justify-between text-left gap-3 category-item bg-white dark:bg-slate-700 dark:shadow-md' >
                    <div key={index} className='flex flex-1 justify-between  text-left gap-3 category-item pt-10 pl-10 pr-9 pb-52 shadow-sm group' style={divStyle}>
                        <div className='text'>
                            <h4 className='category-name category-title text-xl font-bold mb-3 dark:text-white'>{category}</h4>
                            <div className='category-post-count text-base text-gray-300 dark:text-slate-400'>+1230 Recipes</div>
                        </div>
                        <div className='call-to-action '>
                            <Link to='#' className='w-7 h-7 rounded-full bg-light text-primary flex items-center justify-center group-hover:shadow-primary-shadow group-hover:bg-primary group-hover:text-white group-hover:mt-2 transform group-hover:scale-110 transition-all duration-200'>
                                <FaChevronRight className='text-sm' />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category