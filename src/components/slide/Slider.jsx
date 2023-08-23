import React from 'react'
import Thumb from "../../assets/images/thumb.jpg"
import Btn from '../btn/Btn';

const Slider = (props) => {

    const post = props.data;
    const divStyle = {
        background: `url('${Thumb}') center center / cover no-repeat`, // Background image properties
    };

    return (
        <div className='loop-item flex-1 flex items-center justify-center relative min-h-screen p-8 lg:p-14 text-center' style={divStyle}>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-secondary opacity-40'></div>
            <div className='post-text-container relative max-w-3xl p-3 md:pl-10'>
                <div className='category-pile text-3xl font-bold text-primary pb-2'>Food</div>
                <h1 className='post-title loop-title pb-4 text-white'>{post.title}</h1>
                <div className='excerpts loop-excerpts text-xl text-white text-opacity-80 mb-4 lg:mr-16'>We look our best in subdued colors, sophisticated cuts, and ...</div>
                <Btn className="read-more" text="Read More" link={post.link} type="primary" />
            </div>
        </div>
    )
}

export default Slider