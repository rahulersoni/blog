import React from 'react';
import { Link } from 'react-router-dom';

const BtnOutline = ({ type, link, text }) => {
    return (
        <Link
            to={link}
            className={`inline-block px-6 py-3 rounded-md font-semibold border border-${type} text-${type} transition-colors hover:bg-primary hover:text-white hover:shadow-primary-shadow dark:hover:bg-slate-950 dark:hover:border-slate-950 dark:shadow-slate-950`}
        >
            {text}
        </Link>
    );
};

export default BtnOutline;
