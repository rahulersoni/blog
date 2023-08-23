import React from 'react'
import Sidebar from './Sidebar'
import GridLoop from '../components/loops/GridLoop';
import Page from './Page';

const ArcheiveCategory = (props) => {

    const latestPostsData = props.data;

    return (
        <Page classes="post-archeive bg-zinc-100 dark:bg-slate-700">
            <section className='archeive flex flex-wrap pt-14 gap-9 pb-14 pl-4 pr-4 ' id='archeive'>
                <div className='archive md:w-8/12'>
                    <GridLoop data={latestPostsData} template="category" column="1" limit="4" />
                </div>
                <Sidebar data={latestPostsData} />
            </section>
        </Page>
    )
}

export default ArcheiveCategory