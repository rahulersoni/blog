import React from 'react'
import Page from './Page'
import nofFoundImage from "../assets/images/404.png"
import Btn from '../components/btn/Btn'

const PageNotFound = () => {
    return (
        <Page title="404 Page Not Found">
            <section className='login pt-14 pb-14 p-3' id='login'>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-16 rounded-lg shadow-card dark:bg-slate-800'>
                        <img src={nofFoundImage} alt='not found ' />
                        <div className='text-center'>
                            <h1 className='mt-5 mb-5'>404 Error</h1>
                            <h4 className='mb-5'>Page Not Found</h4>
                            <Btn type="primary" link="/" text="Go Back to Home page" />
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default PageNotFound