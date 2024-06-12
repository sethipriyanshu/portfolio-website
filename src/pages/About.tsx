import aboutMeImage from '../about-me.jpg';

export const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div className="mockup-phone">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <div className="w-full h-full carousel rounded-box">
                                    <div className="carousel-item w-full h-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full h-full object-cover" alt="Tailwind CSS Carousel component" />
                                    </div> 
                                    <div className="carousel-item w-full h-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full h-full object-cover" alt="Tailwind CSS Carousel component" />
                                    </div> 
                                    {/* Add more carousel items as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <p className="py-6">I'm a Computer Science major at The University of Alabama, with an interest in Software Engineering. My academic journey is complemented by a passion for System Design, Data Structures, and Algorithms.<br/><br/> Being highly involved with undergraduate research, I have co-authored two papers that explore the intersections of Robotics and Physics with Artificial Intelligence.<br/><br/> Beyond academia, I am an avid traveler with an interest in cultural exploration. Having ventured into 6 countries, I have relished immersing myself in diverse landscapes and culinary delights, enriching my perspective on global diversity.<br/><br/> Through this website, I aspire to offer a glimpse into my Journey towards becoming a better Software Engineer one commit at a time.</p>
                    <button className="btn btn-outline">Github</button>
                    <span style={{ marginRight: '10px' }}></span>
                    <button className="btn btn-outline btn-info">LinkedIn</button>

                    
                </div>
            </div>
        </div>
    );
};
