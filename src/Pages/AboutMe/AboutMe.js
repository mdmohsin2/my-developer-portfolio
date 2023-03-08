import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row" data-aos="zoom-in" data-aos-duration='3000'>
                <img alt="" className=" w-[400px] rounded-lg shadow-2xl lg:mr-32 " src='https://i.ibb.co/gy8R9VG/bg.png' />
                <div>
                    <h2 className='text-5xl mt-14'>About <span className='text-red-400'>Me</span></h2>

                    <div className='md:w-[550px] mt-10'>
                        <p>Hello. My name is Mohsin, i am 22 years old.i live in Chandpur bangladesh. i completed diploma in computer science engineering from comilla polytechnic institute in 2021. i am currently doing bsc on computer science engineering in sonargaon university. I am a frontend web developer. I have worked on many of my projects. Every project is different and works Front-End, Backend and design done by me. I request you to see my projects.
                            <br /><br />
                            i a freedom loving person . I enjoy work. The only difference between me and those who upgrade the world is skill. I will work to improve myself. I dream of giving something new to the world one day.
                            <br /><br />
                            I am expert with JavaScript, React.js, CSS, Bootstrap, React Bootstrap, Tailwind, DaisyUI, HTML, Express.js, Firebase, MongoDB and I used many tools (Github, Netlify, Canva, Figma, React Icons, React Router, React Toast, React Query, React Photo View, React Hook Form, Context API etc). I consider myself as a self-motivated, responsible and disciplined person. I am always ready to face any problem and try my best to solve it with my analogical knowledge and new technology.</p>
                    </div>
                    <div className='mt-6'>
                        <button className='btn btn-outline btn-warning'><Link to='/contact'>Contact me</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;