import React from 'react'
import { FaEdit, FaTrash, FaCommentDots, FaDraftingCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostActions = (props) => {

    return (
        <div className={`absolute w-52 right-0 bottom-0 origin-bottom-right bg-white dark:bg-slate-800 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40 transform opacity-100 scale-100`} data-headlessui-state="open">
            <div className="px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300" role="none">
                <Link className="flex gap-2 items-center rounded-md px-3 py-2 w-full hover:bg-neutral-100 dark:hover:bg-slate-600" to={`/dashboard/edit-post/?id=${props.id}&action=edit`}>
                    <FaEdit /> Edit post
                </Link>
                <Link className="flex gap-2 items-center rounded-md px-3 py-2 w-full hover:bg-neutral-100 dark:hover:bg-slate-600" to={`${props.link}/#comment`} >
                    <FaCommentDots />Comment this post
                </Link>
                <button data-id={props.id} className="flex gap-2 items-center rounded-md px-3 py-2 w-full hover:bg-neutral-100 dark:hover:bg-slate-600">
                    <FaDraftingCompass /> Draft post
                </button>
                <button data-id={props.id} className="flex gap-2 items-center rounded-md px-3 py-2 w-full hover:bg-neutral-100 dark:hover:bg-slate-600">
                    <FaTrash /> Delete post
                </button>
            </div>
        </div>
    )
}

export default PostActions