import React from 'react';
import career from '../../../assets/career.jpg'
import autocar from '../../../assets/4.jpg'
import photobazar from '../../../assets/3.jpg'
import itinstitute from '../../../assets/it.jpg'
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
        <div className='my-32' data-aos="zoom-in-up" data-aos-duration='3000'>
            <h2 className='text-5xl text-white mb-10'>MY PROJECTS</h2>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card p-4 bg-gray-700 shadow-xl">
                    <figure><img src={career} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Name: Career Edge
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>-- A ONLINE JOB PLATFORM</p>
                        <div className="card-actions justify-end">
                            <btn className="btn btn-outline btn-primary">
                                <Link to='/careeredge'>View Details</Link>
                                {/* <a href="https://assignment-12-aa21d.web.app/" target="_blank">View Project</a> */}
                            </btn>
                        </div>
                    </div>
                </div>
                <div className="card p-4 bg-gray-700 shadow-xl">
                    <figure><img src={autocar} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Name: Auto Car
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>--A  AUTOCAR RESELLING WEBSITE</p>
                        <div className="card-actions justify-end">
                            <btn className="btn btn-outline btn-primary">
                                <Link to='/autocar'>View Details</Link>
                                {/* <a href="https://assignment-12-aa21d.web.app/" target="_blank">View Project</a> */}
                            </btn>
                        </div>
                    </div>
                </div>
                <div className="card p-4 bg-gray-700 shadow-xl">
                    <figure><img src={photobazar} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Name: Photo Bazar
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>--A PHOTO REVIEW WEBSITE</p>
                        <div className="card-actions justify-end">
                            <btn className="btn btn-outline btn-primary">
                                <Link to='/photobazar'>View Details</Link>
                                {/* <a href="https://assignment-11-dc0c2.web.app/" target="_blank">View Project</a> */}
                            </btn>
                        </div>
                    </div>
                </div>
                <div className="card p-4 bg-gray-700 shadow-xl">
                    <figure><img src={itinstitute} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Name: It Institute
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>--A DIGITAL TEACHING PLATFORM</p>
                        <div className="card-actions justify-end">
                            <btn className="btn btn-outline btn-primary">
                                <Link to='/itinstitute'>View Details</Link>
                                {/* <a href="https://assignment-10-b8e77.web.app/" target="_blank">View Project</a> */}
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;