import React from 'react'
import Btn from '../btn/Btn'
import thumb from "../../assets/images/thumb.jpg"

const Hero = () => {

    const divStyle = {
        background: `url('${thumb}') center center / cover no-repeat`, // Background image properties
    };

    return (
        <div className='outer-container flex flex-wrap items-center gap-5 mb-5'>
            <div className='loop-item flex-1 relative rounded-lg p-8 lg:p-14 text-left object-cover' style={divStyle}>
                {/* Overlay using a pseudo-element */}
                <div className='overlay absolute top-0 left-0 w-full h-full bg-secondary opacity-40 rounded-lg'></div>
                <div className='post-text-container relative p-3 md:pb-32 md:pl-10'>
                    <div className='category-pile text-primary pb-2'>Food</div>
                    <h3 className='post-title loop-title pb-4 text-white text-3xl font-bold'>Cracker Barrel Pumpkin Custard N’ Ginger Snaps</h3>
                    <div className='excerpts loop-excerpts text-white text-opacity-80 mb-4 lg:mr-16'>We look our best in subdued colors, sophisticated cuts, and ...</div>
                    <Btn className="read-more" text="Read More" link="#" type="primary" />
                </div>
            </div>
            <div className='loop-item flex-1 relative rounded-lg p-8 lg:p-14 text-left' style={divStyle}>
                {/* Overlay using a pseudo-element */}
                <div className='overlay absolute top-0 left-0 w-full h-full bg-secondary opacity-40 rounded-lg'></div>
                <div className='post-text-container relative p-3 md:pb-32 md:pl-10'>
                    <div className='category-pile text-primary pb-2'>Food</div>
                    <h3 className='post-title loop-title pb-4 text-white text-3xl font-bold'>Cracker Barrel Pumpkin Custard N’ Ginger Snaps</h3>
                    <div className='excerpts loop-excerpts text-white text-opacity-80 mb-4 lg:mr-16'>We look our best in subdued colors, sophisticated cuts, and ...</div>
                    <Btn className="read-more" text="Read More" link="#" type="primary" />
                </div>
            </div>
        </div>
    )
}

export default Hero