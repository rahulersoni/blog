import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import LatestPostCard from '../card/LatestPostCard';
import PostSlide from '../slide/PostSlide';

const CarouselLoop = (props) => {
    const { autoplay, arrows, template, dots, slides, limit = 3 } = props;

    const limitedData = slides.slice(0, limit); // Slice the array to the limit props

    // Define a map of template names to their corresponding components
    const templates = {
        trending: PostSlide,
        latest: LatestPostCard,
        // Add more templates here as needed
    };

    // Get the corresponding dynamic component using the template name
    const DynamicPostCardComponent = templates[template] || LatestPostCard; // Default to LatestPostCard if template not found

    const carouselRef = useRef(null);
    const [flickity, setFlickity] = useState(null);

    useEffect(() => {
        // Initialize the Flickity carousel once the component is mounted
        const flickityInstance = new Flickity(carouselRef.current, {
            // Flickity options can be specified here (e.g., options for slider behavior)
            freeScroll: true,
            cellAlign: 'left', // Slide alignment (options: 'left', 'center', 'right')
            wrapAround: true, // Infinite loop
            autoPlay: autoplay !== undefined ? autoplay : false, // autoplay
            prevNextButtons: arrows !== undefined ? arrows : false, // Show previous and next buttons
            pageDots: dots !== undefined ? dots : false, // Show pagination dots
            adaptiveHeight: true
        });

        setFlickity(flickityInstance);

        // Destroy the Flickity carousel when the component is unmounted to avoid memory leaks
        return () => {
            if (flickityInstance) {
                flickityInstance.destroy();
            }
        };
    }, [autoplay, arrows, dots]);

    return (
        <>
            <div ref={carouselRef} className=' '>
                {limitedData.map((post, index) => (
                    <DynamicPostCardComponent key={index} data={post} />
                ))}
            </div>
        </>
    );
};

export default CarouselLoop;
