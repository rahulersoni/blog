import React from 'react'
import GridLoop from '../components/loops/GridLoop'
import { useLocation, useNavigate } from 'react-router-dom';
import Page from './Page';
import SelectInput from '../components/fields/SelectInput';

const Search = ({ data }) => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('s');
    const navigate = useNavigate(); // Corrected hook

    if (!query) return navigate('/');
    const latestPostsData = data.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
    console.log(latestPostsData);

    return (
        <Page title={`Search Result for : ${query}`} classes="search-posts">
            <section className='filter pt-14 pb-14 pl-5 pr-5'>
                <div className='flex justify-between items-center flex-col lg:flex-row'>
                    <div className='tab flex gap-3 flex-wrap mb-5 justify-center md:justify-start'>
                        <h2>Results for: {query ? query : ''}</h2>
                    </div>
                    <div className='dropdown'>

                        <SelectInput name="sort_by" curved={true} options={['Most Recent', 'Most Liked', 'Most Discussed', '"Most Viewed']} />

                    </div>
                </div>
            </section>

            <section className='filter pb-14 pl-5 pr-5'>
                <GridLoop data={latestPostsData} template="dashboard" column="4" limit="10" />
            </section>

        </Page>
    )
}

export default Search