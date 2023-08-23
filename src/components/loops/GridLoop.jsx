import React, { useState } from 'react';
import LatestPostCard from '../card/LatestPostCard';
import TrendingPostCard from '../card/TrendingPostCard';
import ListPostCard from '../card/ListPostCard';
import ArchivePostCard from '../card/ArchivePostCard';
import DashboardPostCard from '../card/DashboardPostCard';
import CarouselPostCard from '../slide/Slider'
import Btn from '../btn/Btn';

const GridLoop = (props) => {

    const { load, gap = 6, template, data, column, limit } = props;
    const [maxLimit, setMaxLimit] = useState(limit || 3);
    const gripGap = 'gap-' + gap;
    const limitedData = data.slice(0, maxLimit); // Slice the array to the limit props

    const increaseLimitHandler = () => {
        setMaxLimit(prevLimit => (Number(prevLimit) + 3 <= data?.length) ? Number(prevLimit) + 3 : data?.length); // Increase the limit by 3
    }

    // Define a map to map the column prop to the corresponding classes value
    const columnClassesMap = {
        '4': 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        '3': 'md:grid-cols-2 lg:grid-cols-3',
        '2': 'md:grid-cols-2',
        '1': 'md:grid-cols-1',
        // Default value if the column prop is not '4', '3', '2', or '1'
        default: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    };

    const classes = columnClassesMap[column] || columnClassesMap.default;

    // Define a map of template names to their corresponding components
    const templates = {
        trending: TrendingPostCard,
        latest: LatestPostCard,
        list: ListPostCard,
        archive: ArchivePostCard,
        category: ArchivePostCard,
        carousel: CarouselPostCard,
        dashboard: DashboardPostCard
        // Add more templates here as needed
    };

    // Get the corresponding dynamic component using the template name
    const DynamicPostCardComponent = templates[template] || LatestPostCard; // Default to LatestPostCard 

    return (
        <>
            {limitedData.length ? <>
                <div className={`outer-container latest-container grid grid-cols-1 ${classes} ${gripGap} relative mb-8`}>
                    {limitedData.map((post, index) => (
                        <DynamicPostCardComponent key={index} data={post} />
                    ))}
                </div>
                <div className='text-center'>
                    {load && <Btn action={increaseLimitHandler} type="primary" text="Load More" count={maxLimit} maximum={data?.length} />}
                </div>
            </> : <>
                <div className='h-60'>
                    <p className='p-5 shadow-xl rounded-lg bg-slate-900'>No result found</p>
                </div>
            </>}


        </>
    );
};

export default GridLoop;
