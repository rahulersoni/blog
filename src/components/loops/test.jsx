// import Swiper core and required modules
import 'swiper/css/bundle';
import Slider from '../slide/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CarouselPostCard from '../slide/Slider';
import GrideSlide from '../slide/PostSlide';


const SwipperLoop = (props) => {

    const { autoplay, arrows, space, column, loop, template, dots, slides, limit } = props;
    const maxLimit = limit ? limit : 3; // Set default limit to 3
    const limitedData = slides.slice(0, maxLimit); // Slice the array to the limit props

    // Define a map of template names to their corresponding components
    const templates = {
        slide: Slider,
        grid: GrideSlide,
    };

    // Default to LatestPostCard if template not found
    const DynamicPostCardComponent = templates[template] || Slider;

    const breakpoints = {
        0: {
            slidesPerView: 1,
        },
        574: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: Math.min(column, 2),
        },
        1000: {
            slidesPerView: Math.min(column, 3)
        },
        1200: {
            slidesPerView: Math.min(column, 4),
        },
    };
    console.log({ el: dots ? '.swiper-pagination' : undefined });

    return (
        <Swiper modules={[Navigation, Pagination]}
            spaceBetween={space !== undefined ? space : 20}
            slidesPerView={column}
            navigation={arrows !== undefined ? arrows : false}
            pagination={{ clickable: true, enabled: dots ? dots : false, type: 'bullets', bulletClass: "swiper-pagination-bullet bg-primary" }}
            loop={loop !== undefined ? loop : false}
            autoplay={true}
            grabCursor={true}
            breakpoints={breakpoints} >
            {
                limitedData.map((post, index) => (
                    <SwiperSlide key={index}>
                        <DynamicPostCardComponent key={index} data={post} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
};

export default SwipperLoop