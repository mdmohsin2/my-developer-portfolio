import React from 'react';
// import Fade from 'react-reveal/Fade';

const Skils = () => {

    return (
        <div className='my-20 overflow-hidden'>
            <h2 className='text-5xl text-white mb-10'>MY SKILLS</h2>
            <div className="text-center">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    <div className=" lg:text-left" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h2 className='text-3xl mb-10 mt-10 text-orange-500'>Front-End Skill</h2>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div>
                                <span><div className="radial-progress text-primary" style={{ "--value": 90 }}>90%</div></span>
                                <p className='text-lg text-white mt-2'>HTML-5</p>
                            </div>
                            <div>
                                <span><div className="radial-progress text-primary" style={{ "--value": 90 }}>90%</div></span>
                                <p className='text-lg text-white mt-2'>CSS-3</p>
                            </div>
                            <div>
                                <span><div className="radial-progress text-primary" style={{ "--value": 85 }}>90%</div></span>
                                <p className='text-lg text-white mt-2'>Bootstrap-5</p>
                            </div>
                            <div>
                                <span><div className="radial-progress text-primary" style={{ "--value": 95 }}>90%</div></span>
                                <p className='text-lg text-white mt-2'>Tailwind CSS</p>
                            </div>
                            <div>
                                <span><div className="radial-progress text-primary" style={{ "--value": 80 }}>90%</div></span>
                                <p className='text-lg text-white mt-2'>React.js</p>
                            </div>
                        </div>
                    </div>
                    <div className="" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="">
                            <h2 className='text-3xl mb-10 mt-10 text-orange-500'>Back-End Skill</h2>
                            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                <div>
                                    <span><div className="radial-progress text-warning " style={{ "--value": 90 }}>90%</div></span>
                                    <p className='text-lg text-white mt-2'>Java Script</p>
                                </div>
                                <div>
                                    <span><div className="radial-progress text-warning " style={{ "--value": 90 }}>90%</div></span>
                                    <p className='text-lg text-white mt-2'>Node.js</p>
                                </div>
                                <div>
                                    <span><div className="radial-progress text-warning " style={{ "--value": 85 }}>90%</div></span>
                                    <p className='text-lg text-white mt-2'>Express.js</p>
                                </div>
                                <div>
                                    <span><div className="radial-progress text-warning " style={{ "--value": 95 }}>90%</div></span>
                                    <p className='text-lg text-white mt-2'>MongoDB</p>
                                </div>
                                <div>
                                    <span><div className="radial-progress text-warning " style={{ "--value": 80 }}>90%</div></span>
                                    <p className='text-lg text-white mt-2'>JWT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skils;