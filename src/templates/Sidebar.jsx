import React from 'react'
import NewsLetter from '../components/newsletter/NewsLetter'
import GridLoop from '../components/loops/GridLoop'

const Sidebar = (props) => {

    const latestPostsData = props.data;

    return (
        <div className='join sidebar flex-1'>
            <div className='flex items-center justify-between pt-6 pb-6 mb-5'>
                <div className='section-title text-left'>
                    <h5 className='text-primary font-bold'>Join</h5>
                    <h3 className='text-3xl font-bold dark:text-white'>Subscribe</h3>
                </div>
            </div>
            <div className='sidebar-content'>
                <NewsLetter />
                <GridLoop data={latestPostsData} template="list" gap="5" column="1" limit="4" />
            </div>
        </div>
    )
}

export default Sidebar