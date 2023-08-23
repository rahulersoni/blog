import React from 'react'
import Btn from '../btn/Btn';
import Thumb from "../../assets/images/thumb.jpg"

const GrideSlide = (props) => {

    const post = props.data;
    const divStyle = {
        background: `url('${Thumb}') center center / cover no-repeat`, // Background image properties
    };

    return (
        <div className='loop-item relative my-8'>
            <div className='loop-item relative rounded-lg h-full p-8 lg:p-6 text-left object-cover transition-all ease-linear hover:scale-110' style={divStyle}>
                {/* Overlay using a pseudo-element */}
                <div className='overlay absolute top-0 left-0 w-full h-full bg-secondary opacity-40 rounded-lg'></div>
                <div className='post-text-container relative p-3 md:pt-40'>
                    <div className='category-pile text-primary pb-2'>Food</div>
                    <h4 className='post-title loop-title pb-4 text-white text-2xl font-bold'>{post.title}</h4>
                    <Btn className="read-more" text="Read More" link={post.link} type="primary" />
                </div>
            </div>
        </div>
    )
}

export default GrideSlide