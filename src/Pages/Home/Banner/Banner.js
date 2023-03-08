import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-right" data-aos-duration='2000' alt="" className="h-[480px] w-[400px] rounded-lg shadow-2xl lg:mr-12 ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src='https://i.ibb.co/VTL7FbY/p.jpg' />
                    <div>
                        <h2 className='text-5xl mt-14'>Hi I Am <span className='text-red-400'>Md Mohsin</span></h2>
                        <div className='text-orange-400 mt-4'>
                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                    'A WEB DEVELOPER',
                                    1000,
                                    'A MERN STACK DEVELOPER',
                                    1000,
                                    'A FRONT END  DEVELOPER',
                                    1000,
                                ]}
                                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '2em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                        </div>
                        <div className='md:w-[550px] mt-10'>
                            <p>I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
                        </div>
                        <div className='mt-6'>
                            <button className='btn btn-outline btn-warning'><Link to='/contact'>Contact me</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default Banner;