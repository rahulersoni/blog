import React from 'react';
import Hero from '../components/hero/Hero';
import Category from '../components/category/Category';
import Btn from '../components/btn/Btn';
import GridLoop from '../components/loops/GridLoop';
import NewsLetter from '../components/newsletter/NewsLetter';
import SwipperLoop from '../components/loops/SwipperLoop';
import Page from '../templates/Page';


const Home = (props) => {

    const latestPostsData = props.data;

    return (
        <Page title="Home">
            {/* Carousel Secion  */}
            <section className='carousel' id='carousel'>
                <SwipperLoop slides={latestPostsData} template="slider" loop={true} column={1} limit={4} autoplay={true} dots={true} arrows={true} space={0} margin={'no-margin'} />
            </section>

            <section className='carousel pt-14 pb-14 pl-5 pr-5 bg-zinc-100 dark:bg-slate-700' id='carousel'>
                <div className='pt-6 '>
                    <div className='section-title text-center'>
                        <h5 className='text-primary font-bold'>Top Recipies</h5>
                        <h3 className='text-3xl font-bold dark:text-white'>Trending Posts</h3>
                    </div>
                </div>
                <SwipperLoop slides={latestPostsData} template="grid" loop={true} column={4} limit={5} autoplay={true} dots={true} arrows={true} space={50} />
            </section>

            {/* Hero Secion  */}
            <section className='hero pt-14 pb-14 pl-5 pr-5 bg-zinc-100 dark:bg-slate-600' id='hero'>
                <Hero />
                <Category />
            </section>

            {/* Latst Post Section  */}
            <section className='latest pt-14 pb-14 pl-5 pr-5' id='latest'>
                <div className='flex items-center pt-6 pb-6 justify-between'>
                    <div className='section-title text-left'>
                        <h5 className='text-primary font-bold'>Top Recipies</h5>
                        <h3 className='text-3xl font-bold dark:text-white'>Latest Posts</h3>
                    </div>
                    <Btn type="primary" text="View All" />
                </div>

                <GridLoop data={latestPostsData} template="latest" column="4" limit="4" />

            </section>

            {/* Trending Post Section */}
            <section className='trending pt-14 pb-14 pl-4 pr-4 bg-zinc-100 dark:bg-slate-700' id='trending'>
                <div className='flex items-center justify-between pt-6 pb-6 mb-20 '>
                    <div className='section-title text-left'>
                        <h5 className='text-primary font-bold'>Top Recipies</h5>
                        <h3 className='text-3xl font-bold dark:text-white'>Trending Posts</h3>
                    </div>
                    <Btn type="primary" text="View All" />
                </div>

                <GridLoop data={latestPostsData} template="trending" gap="10" column="2" limit="2" />

            </section>

            {/* Archive Recipe Secction */}
            <section className='archeive pt-14 gap-9 pl-4 pb-14 pr-4 flex flex-wrap bg-zinc-100 dark:bg-slate-800 ' id='archeive'>
                <div className='archive md:w-8/12'>
                    <div className='flex items-center justify-between pt-6 pb-6 mb-5'>
                        <div className='section-title text-left'>
                            <h5 className='text-primary font-bold'>The Best</h5>
                            <h3 className='text-3xl font-bold dark:text-white'>Archive Recipes</h3>
                        </div>
                    </div>

                    <GridLoop data={latestPostsData} template="archive" gap="5" column="2" limit="4" load="true" />
                </div>

                <div className='join sidebar flex-1'>
                    <div className='flex items-center justify-between pt-6 pb-6 mb-5'>
                        <div className='section-title text-left'>
                            <h5 className='text-primary font-bold'>Join</h5>
                            <h3 className='text-3xl font-bold'>Subscribe</h3>
                        </div>
                    </div>
                    <div className='sidebar-content'>
                        <NewsLetter />
                        <GridLoop data={latestPostsData} template="list" gap="5" column="1" limit="4" />
                    </div>
                </div>
            </section>
        </Page>

    );
};

export default Home;
