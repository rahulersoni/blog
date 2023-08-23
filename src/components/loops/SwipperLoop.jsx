// import Swiper core and required modules
import 'swiper/css/bundle';
import Slider from '../slide/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import GrideSlide from '../slide/PostSlide';


const SwipperLoop = (props) => {

    const { margin, autoplay, arrows, space, column, loop, template, dots, slides, limit = 3 } = props;

    const limitedData = slides.slice(0, limit); // Slice the array to the limit props

    // Define a map of template names to their corresponding components
    const templates = {
        slider: Slider,
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

    return (
        <Swiper className={`cus-slider ${margin}`} modules={[Navigation, Pagination]}
            spaceBetween={space ? space : 20}
            slidesPerView={column}
            navigation={arrows ? arrows : false}
            pagination={{ clickable: true, enabled: dots ? dots : false, type: 'bullets', bulletClass: "swiper-pagination-bullet bg-primary" }}
            loop={loop ? loop : false}
            autoplay={autoplay ? autoplay : false}
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