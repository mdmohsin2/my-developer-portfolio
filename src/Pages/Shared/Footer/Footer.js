import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Html-5</a>
                <a href='/' className="link link-hover">CSS3</a>
                <a href='/' className="link link-hover">Tailwind</a>
                <a href='/' className="link link-hover">Bootstrap-5</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Find With Me</span>
                <div className="grid grid-flow-col gap-4">
                    <div className='mt-4 flex items-center justify-around'>
                        <div className=' flex items-center'>
                            <Link><FaFacebook className='text-2xl mr-4'></FaFacebook></Link>
                            <a href='https://github.com/mdmohsin2?tab=repositories' target='_blank'><FaGithub className='text-2xl mr-4'></FaGithub></a>
                            <a href='https://www.linkedin.com/in/md-mohsin-a1b702245/' target='_blank'><FaLinkedin className='text-2xl'></FaLinkedin></a>
                        </div>
                        {/* <div>
                                <h2 className='text-lg text-white'>Best Skill On</h2>
                                <div className='mt-4 flex items-center'>
                                    <Link><FaJs className='text-2xl mr-4'></FaJs></Link>
                                    <Link><FaNodeJs className='text-2xl mr-4'></FaNodeJs></Link>
                                    <Link><FaReact className='text-2xl'></FaReact></Link>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;