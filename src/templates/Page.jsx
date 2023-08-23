import React, { useEffect } from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Page = ({ children, title, classes }) => {

    let isUser = (localStorage.getItem('user')) ? true : false;

    useEffect(() => {
        document.title = `${title ? title + ' -' : ''}  Food Blog`;
    }, [title]);

    return (
        <>
            <div className={`page page-container ${title} ${classes}`}>

                <Header user={isUser} />
                <div className="site-content">{children}</div>
                <Footer />

            </div>
        </>
    );
};

export default Page;