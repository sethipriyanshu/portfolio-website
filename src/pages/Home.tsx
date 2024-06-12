import React from 'react';
import homeBackground from '../home-bg.jpg'; // Adjust the path based on your folder structure

export const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <p className="mb-5">My Subtitle Goes Here</p>
                        <button className="btn btn-primary">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
