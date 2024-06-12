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
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};
