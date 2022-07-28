import React, { Component } from 'react';
import './Video.css';

const Video = () => {


    return (
        <div className='video'>
            <video width='100%' autoPlay muted loop >
                <source src="https://res.cloudinary.com/djs7qv2pt/video/upload/v1658993060/Te-llevo_qdoe3x.mp4" />
            </video>
        </div>
    )
}


export default Video